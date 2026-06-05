---
id: queue-intake
role: orchestrator
reads_from_state: [none]
writes_to_state: [queue_signal, queue_claim]
---

# Stage 0 — Intake an optional queue signal

## Objective
Normalize an optional watcher-emitted queue signal into the editorial workflow state.

## Inputs
- A queue signal supplied by the queue consumer, or null for manual/new-case runs

## Rules
- Claim exactly one queued item when present.
- If no queue item is present, continue as a manual flow without inventing a signal.
- Do not freeze sources here.
- Do not edit case files here.

## Output
Write:
- `queue_signal`
- `queue_claim`

## Gate
If queue claiming fails, stop before any case selection or source work.
