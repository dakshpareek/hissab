---
id: freeze-sources
role: worker
reads_from_state: [record_snapshot]
writes_to_state: [frozen_sources]
---

# Stage 3 — Freeze all source material

## Objective
Fetch every source URL and freeze the exact text into immutable artifacts.

## Inputs
- URLs from the current case file
- Any new candidate sources discovered during case correction

## Rules
- Freeze before extraction.
- Use the source URL as the source of truth, not memory.
- If a page fails to load cleanly, fall back to a retry or alternate retrieval path.
- Keep the frozen artifact path in state.
- Prefer direct article pages, not homepages or search result pages.

## Output
For each source, write:
- `source_name`
- `source_url`
- `publication_name`
- `frozen_path`
- `frozen_at`
- `status`
- `sha256` if the artifact was written

## Gate
If any required source cannot be frozen, mark it `timeout` or `partial` and continue only with a recorded fallback.
