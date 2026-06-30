# Validation — andhra-pradesh-dakshin-energy-plant-fire-20260623

- yaml_valid: true
- sources_valid: true
- build_ok: true
- duplicate_check_ok: true
- passed: true

## Notes

- The case file frontmatter parsed cleanly with YAML keys:
  `title`, `date`, `location`, `category`, `status`, `deaths`, `injured`, `accused_count`, `accused_gap`, `summary`, `tags`, `last_updated`, `accused`, `compensation`, and `timeline`.
- `python` frontmatter parsing confirmed `title = Dakshin Energy Plant Fire`, `status = no-action`, and `deaths = 2`.
- The Hugo build completed successfully with `Pages = 355`.
- Duplicate checking found no exact or near-duplicate case file for this incident before drafting.
- Unsupported facts remain `null` rather than inferred.
