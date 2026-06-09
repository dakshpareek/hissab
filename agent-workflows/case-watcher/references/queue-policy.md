# Queue Policy

The watcher and Case Explorer share one coupling point: a durable queue.

## Durable path
- `agent-workflows/case-queue/update-queue.json`
- Append: `python agent-workflows/case-queue/scripts/queue_manager.py append --queue-path agent-workflows/case-queue/update-queue.json`
- Claim oldest: `python agent-workflows/case-queue/scripts/queue_manager.py claim --queue-path agent-workflows/case-queue/update-queue.json`
- Mark done: `python agent-workflows/case-queue/scripts/queue_manager.py complete --queue-path agent-workflows/case-queue/update-queue.json --signal-id <signal_id>`

## Rules
- Watcher appends structured signals only.
- Case Explorer claims one signal at a time.
- Use a dedupe key to prevent duplicate processing.
- `pending -> processing -> done | held`
- `held` means human review or deferred action.
- Queue records are not case records.
- Queue records never replace source freezing or identity confirmation.
