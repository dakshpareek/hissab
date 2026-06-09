#!/usr/bin/env python3
"""Queue manager for Hissab case watcher / case editorial workflow.

This script maintains a small JSON queue at a shared path and supports:
- append: add a signal if dedupe_key is new
- claim: mark the oldest pending item as processing and print it
- complete: mark an item done
- hold: mark an item held
- list: print the queue

The file format is a single JSON object:
{
  "version": 1,
  "updated_at": "...",
  "items": [...]
}
"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
from tempfile import NamedTemporaryFile
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional, Tuple

DEFAULT_QUEUE_PATH = Path("agent-workflows/case-queue/update-queue.json")
DEFAULT_USER = "case-explorer"


def extract_queue_path(argv: List[str]) -> Tuple[Path, List[str]]:
    queue_path = DEFAULT_QUEUE_PATH
    clean: List[str] = []
    i = 0
    while i < len(argv):
        arg = argv[i]
        if arg == "--queue-path":
            if i + 1 >= len(argv):
                raise SystemExit("--queue-path requires a value")
            queue_path = Path(argv[i + 1])
            i += 2
            continue
        clean.append(arg)
        i += 1
    return queue_path, clean


def now_iso() -> str:
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def load_queue(path: Path) -> Dict[str, Any]:
    if not path.exists():
        return {"version": 1, "updated_at": None, "items": []}
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    if "items" not in data:
        data["items"] = []
    if "version" not in data:
        data["version"] = 1
    return data


def atomic_write(path: Path, data: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with NamedTemporaryFile("w", delete=False, dir=str(path.parent), encoding="utf-8", suffix=".tmp") as tmp:
        json.dump(data, tmp, indent=2, ensure_ascii=False)
        tmp.write("\n")
        tmp_path = Path(tmp.name)
    os.replace(tmp_path, path)


def sort_key(item: Dict[str, Any]):
    return (
        item.get("captured_at") or "",
        item.get("article_date") or "",
        item.get("signal_id") or "",
    )


def find_by_signal_id(items: List[Dict[str, Any]], signal_id: str) -> Optional[Dict[str, Any]]:
    for item in items:
        if item.get("signal_id") == signal_id:
            return item
    return None


def append_item(queue: Dict[str, Any], item: Dict[str, Any]) -> Dict[str, Any]:
    items = queue["items"]
    dedupe_key = item["dedupe_key"]
    existing = next((x for x in items if x.get("dedupe_key") == dedupe_key), None)
    if existing:
        return {"action": "duplicate_skipped", "item": existing}

    normalized = {
        "signal_id": item["signal_id"],
        "case_id": item["case_id"],
        "score": item["score"],
        "reason_category": item.get("reason_category"),
        "source_url": item["source_url"],
        "article_date": item.get("article_date"),
        "headline_snippet": item.get("headline_snippet"),
        "captured_at": item.get("captured_at") or now_iso(),
        "dedupe_key": dedupe_key,
        "status": item.get("status") or "pending",
        "claimed_at": item.get("claimed_at"),
        "claimed_by": item.get("claimed_by"),
        "processed_at": item.get("processed_at"),
        "held_reason": item.get("held_reason"),
    }
    items.append(normalized)
    items.sort(key=sort_key)
    queue["updated_at"] = now_iso()
    return {"action": "appended", "item": normalized}


def claim_oldest(queue: Dict[str, Any], claimed_by: str) -> Dict[str, Any]:
    items = queue["items"]
    for item in sorted(items, key=sort_key):
        if item.get("status") == "pending":
            item["status"] = "processing"
            item["claimed_at"] = now_iso()
            item["claimed_by"] = claimed_by
            queue["updated_at"] = now_iso()
            return {"action": "claimed", "item": item}
    return {"action": "none", "item": None}


def update_status(queue: Dict[str, Any], signal_id: str, status: str, *, held_reason: Optional[str] = None) -> Dict[str, Any]:
    item = find_by_signal_id(queue["items"], signal_id)
    if not item:
        return {"action": "not_found", "item": None}
    item["status"] = status
    if status == "done":
        item["processed_at"] = now_iso()
    if status == "held":
        item["held_reason"] = held_reason
    queue["updated_at"] = now_iso()
    return {"action": status, "item": item}


def parse_item_json(value: str) -> Dict[str, Any]:
    data = json.loads(value)
    if not isinstance(data, dict):
        raise SystemExit("item-json must decode to a JSON object")
    return data


def main() -> None:
    queue_path, argv = extract_queue_path(os.sys.argv[1:])
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    append_p = sub.add_parser("append", help="Append a new queue item")
    append_p.add_argument("--item-json", help="Queue item JSON string; if omitted, read from stdin")

    claim_p = sub.add_parser("claim", help="Claim the oldest pending item")
    claim_p.add_argument("--claimed-by", default=DEFAULT_USER)

    done_p = sub.add_parser("complete", help="Mark an item as done")
    done_p.add_argument("--signal-id", required=True)

    hold_p = sub.add_parser("hold", help="Mark an item as held")
    hold_p.add_argument("--signal-id", required=True)
    hold_p.add_argument("--reason", default=None)

    list_p = sub.add_parser("list", help="Print the queue")
    list_p.add_argument("--status", default=None, choices=["pending", "processing", "done", "held"])

    init_p = sub.add_parser("init", help="Initialize the queue file if missing")

    args = parser.parse_args(argv)
    queue_path = Path(queue_path)
    queue = load_queue(queue_path)

    if args.command == "init":
        atomic_write(queue_path, queue)
        print(json.dumps({"action": "initialized", "queue_path": str(queue_path), "items": len(queue["items"])}, indent=2))
        return

    if args.command == "append":
        raw = args.item_json if args.item_json is not None else os.sys.stdin.read()
        item = parse_item_json(raw)
        result = append_item(queue, item)
        atomic_write(queue_path, queue)
        print(json.dumps({"queue_path": str(queue_path), **result}, indent=2, ensure_ascii=False))
        return

    if args.command == "claim":
        result = claim_oldest(queue, args.claimed_by)
        atomic_write(queue_path, queue)
        print(json.dumps({"queue_path": str(queue_path), **result}, indent=2, ensure_ascii=False))
        return

    if args.command == "complete":
        result = update_status(queue, args.signal_id, "done")
        atomic_write(queue_path, queue)
        print(json.dumps({"queue_path": str(queue_path), **result}, indent=2, ensure_ascii=False))
        return

    if args.command == "hold":
        result = update_status(queue, args.signal_id, "held", held_reason=args.reason)
        atomic_write(queue_path, queue)
        print(json.dumps({"queue_path": str(queue_path), **result}, indent=2, ensure_ascii=False))
        return

    if args.command == "list":
        items = queue["items"]
        if args.status:
            items = [item for item in items if item.get("status") == args.status]
        print(json.dumps({"queue_path": str(queue_path), "updated_at": queue.get("updated_at"), "items": items}, indent=2, ensure_ascii=False))
        return


if __name__ == "__main__":
    main()
