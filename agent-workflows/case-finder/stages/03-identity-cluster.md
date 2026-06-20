# Identity Cluster

## Objective
Decide whether candidate articles describe a new case, a follow-up to an existing case, a duplicate, or a weak lead.

## Output
- canonical incident guess
- matched case id when one exists
- reason category
- ambiguity flag

## Rules
- Cluster by date, place, actor, and event type.
- Prefer the strongest public record name.
- Treat generic headlines carefully.
- Do not infer casualty counts or legal status.
- If identity is unclear, route back for another scan pass instead of forcing a match.
