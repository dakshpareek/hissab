# Queue Policy

The finder, watcher, and Case Explorer share one coupling point: a durable queue.

## Durable path
- `agent-workflows/case-queue/update-queue.json`
- Append: `python agent-workflows/case-queue/scripts/queue_manager.py append --queue-path agent-workflows/case-queue/update-queue.json`
- Claim oldest: `python agent-workflows/case-queue/scripts/queue_manager.py claim --queue-path agent-workflows/case-queue/update-queue.json`
- Mark done: `python agent-workflows/case-queue/scripts/queue_manager.py complete --queue-path agent-workflows/case-queue/update-queue.json --signal-id <signal_id>`

## Rules
- A finder signal may be supplied to the case-editorial workflow at startup.
- The queue-intake stage claims at most one signal.
- Case Explorer still performs duplicate check, snapshot, source freeze, identity gate, extraction, critic review, validation, and commit.
- Queue records are not case records.
- Queue records never replace source freezing or identity confirmation.
- If no queue signal is present, the workflow may run in manual new-case or repair-existing-case mode.
