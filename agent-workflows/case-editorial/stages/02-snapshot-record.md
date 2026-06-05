---
id: snapshot-record
role: worker
reads_from_state: [case_file]
writes_to_state: [record_snapshot]
---

# Stage 2 — Snapshot the current record

## Objective
Create a stable snapshot of the file before any source touching or rewriting happens.

## Inputs
- The selected case file from state
- For new-case flow: the selected incident identity inputs from stage 1

## Rules
- Capture the full frontmatter and body as-is when a case file exists.
- Do not normalize, infer, or correct anything yet.
- Preserve the exact current state for later diffing.
- If the case is new, snapshot the incident identity inputs instead of a file body so the later identity gate has a stable baseline.

## Output
Write a structured snapshot to state with:
- raw frontmatter
- raw body markdown
- file path, or `null` for a brand-new case
- incident name, location, and known aliases for new-case flow
- current timestamp
- any observed syntax issues in the original file

## Gate
If the snapshot cannot be parsed, stop and surface the parse error before proceeding.
