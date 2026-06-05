---
id: validate
role: worker
reads_from_state: [case_file, draft_diff, extraction_record, critic_review]
writes_to_state: [validation]
---

# Stage 8 — Validate the final file

## Objective
Verify the written case file is syntactically correct and build-safe.

## Checks
- YAML/frontmatter parses
- Required fields exist
- Source URLs are specific and non-homepage
- Facts match cited sources
- The file renders in Hugo
- The case index remains internally consistent
- The duplicate check remained negative

## Output
Write a validation summary with:
- `yaml_valid`
- `sources_valid`
- `build_ok`
- `duplicate_check_ok`
- `passed`
- `notes`

## Gate
Only a clean pass may proceed to commit.
