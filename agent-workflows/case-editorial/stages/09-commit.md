---
id: commit
role: orchestrator
reads_from_state: [case_file, validation]
writes_to_state: [commit_ready]
---

# Stage 9 — Commit the correction

## Objective
Commit exactly one corrected case file if and only if validation passed, then hand off to the remote-push stage.

## Rules
- Write only the single corrected case file.
- Do not include unrelated edits in the commit.
- If the case was renamed, ensure delete/create semantics are handled cleanly.
- Never commit if validation failed.
- Never edit generated output under `public/` manually.
- If the build fails after a rewrite, roll back the change set and stop.
- Keep the commit focused so the next stage can push the same correction cleanly.

## Output
Set `commit_ready` to true only when the corrected file is written and validated.

## Gate
Commit is not the last step. After a successful commit, continue to `push`.
