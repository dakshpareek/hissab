---
id: select-case
role: orchestrator
reads_from_state: [none]
writes_to_state: [case_slug, case_file, duplicate_guard]
---

# Stage 1 — Select a case

## Objective
Pick exactly one case file to work on and check for duplicates before any source work begins.

## Inputs
- `content/cases/*.md`
- Existing case index under `public/cases/` if needed for name collision checks
- User-provided incident name, location, and any known aliases
- Optional `queue_signal` from the queue-intake stage

## Rules
- Only one case at a time.
- Prefer cases with obvious editorial debt: broken source links, monitoring-only timeline entries, title/date mismatches, or stale `last_updated`.
- Stop immediately if a near-duplicate already exists.
- If no exact case file exists, treat this as a new-case path and record the selected identity inputs for later snapshotting.
- If `queue_signal` is present, treat it as the preferred source of case selection and still run duplicate checks before any source work.

## Output
Write to state:
- `case_slug`
- `case_file` if an existing file was found; otherwise `null`
- `duplicate_guard` with `matched`, `match_slug`, `reason`, and `evidence`

## Gate
If `duplicate_guard.matched` is true, halt and merge rather than create a second record.
If `duplicate_guard.matched` is false, continue using the new-case or repair-existing-case path as appropriate.
