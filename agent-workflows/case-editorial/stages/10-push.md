---
id: push
role: orchestrator
reads_from_state: [case_file, validation, commit_ready]
writes_to_state: [pushed_to_remote]
---

# Stage 10 — Push the committed correction

## Objective
Push the validated local commit to the tracked remote so the finished case actually lands upstream.

## Rules
- Only run this stage after `commit_ready` is true and validation passed.
- Verify the commit is the one intended for the case correction.
- Push the current branch to the tracked remote (`origin/main`) without amending the commit.
- If the push fails, stop and surface the exact remote error.
- Do not sweep in unrelated working-tree changes.

## Output
Set `pushed_to_remote` to true only after `git push` succeeds and the remote branch advances.

## Gate
This is the final stage. The run is complete only after the remote push succeeds.
