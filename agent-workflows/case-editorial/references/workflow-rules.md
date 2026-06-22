# Workflow Rules

## Workflow modes
- **new-case**: create a new case file only after duplicate checks and identity confirmation.
- **repair-existing-case**: snapshot the current file first, then freeze sources and rewrite minimally.
- **queued-case**: claim one queue signal, then proceed through the normal editorial gates for exactly one case.

## Hard rules
1. Work on one case at a time.
2. Check duplicates / near-duplicates before any source work.
3. If the case exists, snapshot the current record before touching sources or rewriting.
4. If the case does not exist, snapshot the selected incident identity inputs instead of a file snapshot.
5. Freeze all sources before extraction.
6. Verify the frozen text matches the selected incident before populating fields.
7. Use null when the public record does not directly support a field.
8. If sources conflict, record the conflict instead of resolving it by guesswork.
9. Critic review is mandatory before validation.
10. Validation must pass before commit.
11. Never edit `public/` by hand.
12. Never rely on model memory for factual case data.
13. If the case file needs a rename, treat it as a rename, not a silent content edit.
14. A successful remote push is required before the run is considered finished.

## Required gate outputs
- **duplicate_guard**: `matched`, `match_slug`, `reason`, `evidence`
- **identity_gate**: `verdict`, `notes`, `supporting_quotes`
- **frozen_sources**: source name, URL, publication name, frozen path, timestamp, status, and SHA256
- **critic_review**: `verdict`, `rejected_claims`, `required_fixes`, `notes`
- **validation**: `yaml_valid`, `sources_valid`, `build_ok`, `duplicate_check_ok`, `passed`, `notes`

## Retry / escalation policy
- Source fetch fails once: retry with a simpler retrieval path.
- Source still fails: use an alternate cached or archived copy if available.
- Identity remains unclear: stop and escalate.
- Critic rejects twice: stop and escalate.
- Build fails: fix only build-related issues or stop.
