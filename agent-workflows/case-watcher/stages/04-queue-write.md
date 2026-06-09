---
id: queue-write
role: worker
reads_from_state: [scored_signals]
writes_to_state: [queue_write_result]
---

# Stage 4 — Write queue signals

## Objective
Append eligible signals to the durable queue.

## Queue target
- `agent-workflows/case-queue/update-queue.json`
- Script: `python agent-workflows/case-queue/scripts/queue_manager.py append --queue-path agent-workflows/case-queue/update-queue.json`

## Rules
- Write only structured signals.
- Use dedupe keys to avoid duplicate inserts.
- Do not write case files.
- Do not freeze source text.

## Output
Write:
- `queue_write_result`

## Gate
If queue write fails, record the failure and stop without touching case records.
