# Queue Policy

The watcher and Case Explorer share one coupling point: a durable queue.

## Rules
- Watcher appends structured signals only.
- Case Explorer claims one signal at a time.
- Use a dedupe key to prevent duplicate processing.
- `pending -> processing -> done | held`
- `held` means human review or deferred action.
- Queue records are not case records.
- Queue records never replace source freezing or identity confirmation.
