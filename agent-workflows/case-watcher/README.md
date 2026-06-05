# Case Watcher Workflow Package

This package defines a read-only watcher that scans public sources for material updates to tracked accountability cases and emits structured signals to a queue.

## Role
- Watcher = upstream signal producer
- Case Explorer = downstream editorial consumer

## Hard constraints
- The watcher never edits case files.
- The watcher never freezes full source text.
- The watcher never bypasses Case Explorer’s duplicate check, identity gate, extraction, critic review, validation, or commit steps.
- The watcher only emits structured signals to the queue.

## Package contents
- `manifest.yaml` — entry point and stage graph
- `stages/` — stage contracts
- `schemas/` — signal, registry, queue, and watcher-state schemas
- `signals/` — scoring prompts
- `references/` — operating notes and queue policy

## How it works
1. Read the tracked case registry.
2. Scan public sources for candidate updates.
3. Score candidates as high / medium / noise.
4. Write high-value signals to the queue.
5. Leave material editing to Case Explorer.

## Queue coupling
The queue is the only shared coupling point between watcher and explorer. The watcher appends signals; the Case Explorer consumer claims one signal at a time and then runs the normal case editorial workflow.

## Notes
- This package is provider-neutral.
- It is designed to be driven by Hermes cron later, but it does not require cron configuration to exist yet.
- The watcher is intentionally upstream only.
