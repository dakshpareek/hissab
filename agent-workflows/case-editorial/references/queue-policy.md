# Queue Policy

The watcher and Case Explorer share one coupling point: a durable queue.

## Rules
- A queue signal may be supplied to the case-editorial workflow at startup.
- The queue-intake stage claims at most one signal.
- Case Explorer still performs duplicate check, snapshot, source freeze, identity gate, extraction, critic review, validation, and commit.
- Queue records are not case records.
- Queue records never replace source freezing or identity confirmation.
- If no queue signal is present, the workflow may run in manual new-case or repair-existing-case mode.
