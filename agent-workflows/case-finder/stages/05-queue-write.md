# Queue Write

## Objective
Emit structured discovery signals to the shared queue.

## Queue target
- `agent-workflows/case-queue/update-queue.json`
- Script: `python agent-workflows/case-queue/scripts/queue_manager.py append --queue-path agent-workflows/case-queue/update-queue.json`

## Rules
- Write only structured signals.
- Use dedupe keys to avoid duplicate inserts.
- Queue `high` signals directly.
- Hold `medium` signals if they need a human review pass.
- Drop `noise`.
- Do not edit case files.
- Do not freeze source text.
