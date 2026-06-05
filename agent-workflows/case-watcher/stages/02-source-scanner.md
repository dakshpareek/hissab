---
id: source-scanner
role: worker
reads_from_state: [case_registry]
writes_to_state: [candidate_articles]
---

# Stage 2 — Scan public sources

## Objective
Find candidate updates for each tracked case.

## Inputs
- The case registry

## Rules
- Use watch terms and aliases from the registry.
- Prefer direct articles from trusted publications.
- Limit result count per case.
- Do not freeze full source text.
- Do not classify legal meaning yet.

## Output
Write:
- `candidate_articles[]`

## Gate
If no credible candidates are found, output an empty list and continue.
