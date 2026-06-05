---
id: signal-scorer
role: critic
reads_from_state: [case_registry, candidate_articles]
writes_to_state: [scored_signals]
---

# Stage 3 — Score candidate articles

## Objective
Decide whether each candidate article is a material update for a tracked case.

## Rules
- JSON-only output.
- Do not summarize the article.
- Do not extract case-file facts.
- Classify only the signal strength and reason category.

## Output
Write:
- `scored_signals[]`

## Gate
Only `high` and `medium` signals may proceed to queue write.
