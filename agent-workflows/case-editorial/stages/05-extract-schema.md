---
id: extract-schema
role: worker
reads_from_state: [record_snapshot, frozen_sources, identity_gate]
writes_to_state: [extraction_record, conflict_notes]
---

# Stage 5 — Extract the case schema

## Objective
Populate the case frontmatter schema from frozen text only.

## Rules
- Null instead of inference.
- Every populated value must be directly supportable by a quote from a frozen source.
- If sources disagree, do not resolve by guesswork.
- Put contested values in `conflict_notes` and null out the field.
- Maintain an evidence list that maps each extracted field to one or more exact frozen quotes.

## Output
Populate:
- title
- date
- location
- category
- status
- deaths
- injured
- accused_count
- accused_gap
- summary
- tags
- last_updated
- accused[]
- compensation
- timeline[]

Also write an evidence map with:
- `field_name`
- `value`
- `source_url`
- `exact_quote`

## Gate
If there are unresolved conflicts, set the disputed fields to null and flag the case for human review.
