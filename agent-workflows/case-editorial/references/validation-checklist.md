# Validation Checklist

Before commit, confirm:

- [ ] Case title matches the incident described by the sources
- [ ] Date and location are source-backed
- [ ] Category and status are consistent with the narrative
- [ ] Counts are source-backed and non-negative
- [ ] Accused list entries are specific and accurate
- [ ] Compensation fields are not guessed
- [ ] Timeline entries each have a specific source URL
- [ ] No homepage links used where a specific article exists
- [ ] YAML/frontmatter parses cleanly
- [ ] Hugo build succeeds
- [ ] No duplicate or near-duplicate case file was created
- [ ] Every populated field has a quote-backed evidence entry
- [ ] Validation output can truthfully set `yaml_valid`, `sources_valid`, `build_ok`, `duplicate_check_ok`, and `passed` to true
