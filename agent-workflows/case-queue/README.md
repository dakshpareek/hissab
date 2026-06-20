# Shared Case Update Queue

This package defines the durable queue shared by `case-finder`, `case-watcher`, and `case-editorial`.

## Purpose
- `case-finder` appends discovery signals here.
- `case-watcher` appends tracked-case update signals here.
- `case-editorial` claims one pending signal at a time from here.
- The queue is the only coupling point between upstream discovery and explorer/editorial work.

## Durable queue path
- `agent-workflows/case-queue/update-queue.json`

## What lives here
- `manifest.yaml` — queue contract and state shape
- `schemas/` — queue record schema
- `scripts/` — small CLI used by agents to append, claim, complete, or hold items

## Semantics
- `pending` → waiting to be claimed
- `processing` → claimed by Case Explorer
- `done` → processed successfully
- `held` → needs review or was deferred

## Rules
- Dedupe by `dedupe_key`
- Claim the oldest `pending` item first
- Do not let queue records replace source freezing or identity checks
- Do not edit case files from the watcher side
