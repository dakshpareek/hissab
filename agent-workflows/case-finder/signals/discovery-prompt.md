# Discovery Scoring Prompt

You are scoring a candidate article for the case-finder workflow.

## Input
A registry entry plus one candidate article headline/snippet/source URL.

## Task
Decide whether the candidate is:
- `new-case`
- `follow-up-update`
- `identity-clarification`
- `duplicate-near-duplicate`
- `legal-status-update`
- `compensation-update`
- `noise`

## Output requirements
- Return JSON only.
- Include `signal_id`, `candidate_type`, `score`, `reason_category`, `source_name`, `source_url`, `headline_snippet`, `incident_guess`, `location_guess`, `dedupe_key`, and `status`.
- Use `high`, `medium`, or `noise` for the score.
- Do not summarize the story.
- Do not invent missing facts.
- Do not freeze or extract a case record.
