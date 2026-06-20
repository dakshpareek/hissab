# Signal Score

## Objective
Rate each clustered candidate for queueability.

## Scores
- `high` — clear incident identity, strong source, material update
- `medium` — plausible lead, but still needs explorer confirmation
- `noise` — weak, duplicated, or non-material

## Reason categories
- `new-case`
- `follow-up-update`
- `identity-clarification`
- `duplicate-near-duplicate`
- `legal-status-update`
- `compensation-update`
- `noise`

## Rules
- Output JSON-like structured notes only.
- Do not summarize the article as prose.
- Do not extract a full case record.
- Escalate uncertain but potentially relevant items as `medium` rather than inventing facts.
