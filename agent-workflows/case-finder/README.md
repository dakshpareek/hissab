# Case Finder Workflow Package

This package defines a read-only discovery workflow that scans public sources for new incident candidates and material follow-up leads, then emits structured signals for the shared queue.

## Role
- Finder = upstream discovery and triage layer
- Case Explorer = downstream editorial consumer

## Hard constraints
- The finder never edits case files.
- The finder never freezes source text.
- The finder never extracts a full case record.
- The finder never bypasses Case Explorer’s duplicate check, snapshot, source freeze, identity gate, extraction, critic review, validation, or commit steps.
- The finder only emits structured signals to the queue.

## What it follows
### Highest-priority sources
- Official government releases and notices
- Court orders, hearing notes, and filings
- Regulators and public agencies
- Company statements when the company is the named actor or affected party

### Primary news sources
- Named publication articles with direct article URLs
- Wire reports published on newsroom pages
- Regional and national outlets with direct incident reporting

### Discovery-only sources
- RSS/feed excerpts
- Search-result snippets
- Topic pages that point to a specific article
- Official social posts from verified agency/company accounts when they provide an incident lead

## Package contents
- `manifest.yaml` — entry point and stage graph
- `stages/` — stage contracts
- `schemas/` — registry, candidate-signal, and finder-state schemas
- `signals/` — scoring prompts
- `references/` — source policy and queue policy

## How it works
1. Read the source registry.
2. Scan trusted and discovery sources for candidate incidents.
3. Cluster candidates against known case identities.
4. Score candidates as high / medium / noise.
5. Write only worthwhile signals to the queue.

## Source policy
- Prefer direct article URLs over wrappers.
- Prefer official sources over news summaries when both exist.
- Use search snippets and feeds only to discover candidates, not as final evidence.
- Drop pure noise and syndication duplicates early.

## Queue coupling
The queue is the only shared coupling point between finder, watcher, and editorial.

**Queue path:** `agent-workflows/case-queue/update-queue.json`

Use the queue manager script for all mutations:
- Append: `python agent-workflows/case-queue/scripts/queue_manager.py append --queue-path agent-workflows/case-queue/update-queue.json`
- Claim oldest: `python agent-workflows/case-queue/scripts/queue_manager.py claim --queue-path agent-workflows/case-queue/update-queue.json`
- Mark done: `python agent-workflows/case-queue/scripts/queue_manager.py complete --queue-path agent-workflows/case-queue/update-queue.json --signal-id <signal_id>`

Finder signals are only discovery leads; Case Explorer still performs the editorial workflow from duplicate check through commit.

## Notes
- This package is provider-neutral.
- It is designed to be cron-friendly later, but it does not require cron configuration to exist yet.
- The finder is intentionally upstream only.
