---
yaml_valid: true
sources_valid: true
build_ok: true
duplicate_check_ok: true
passed: true
notes: The case file frontmatter parses cleanly, the Reuters article was frozen successfully via the accessible Yahoo News UK mirror and hashed, the duplicate search found no exact or near-duplicate case record in content/cases, and Hugo built cleanly after the case file write.
---

# Validation

- [x] YAML/frontmatter parses cleanly
- [x] Source freeze exists and matches the frozen source hash
- [x] Duplicate / near-duplicate search found no conflicting case record
- [x] Hugo build succeeded
- [x] Every populated field in the draft is supported by the frozen source set
- [x] Unsupported injury and accountability details remain null or empty
