---
id: draft-rewrite
role: worker
reads_from_state: [record_snapshot, extraction_record, conflict_notes]
writes_to_state: [draft_diff]
---

# Stage 6 — Draft the rewrite

## Objective
Create the minimal file diff needed to align the case file with the extraction record.

## Rules
- Keep the rewrite minimal.
- Preserve unrelated prose unless it contradicts the frozen record.
- Do not add new facts beyond the extraction record.
- If the file needs a rename, treat that as part of the draft outcome.

## Output
Write a patch-style diff or a complete replacement, whichever is simplest for the agent runtime.

## Gate
The draft must reflect the frozen evidence and the null mandate exactly.
