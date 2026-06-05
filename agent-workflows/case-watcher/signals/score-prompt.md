---
role: signal-scorer
output_schema: schemas/signal.json
---

You are evaluating whether a news article describes a new, material development for a specific accountability case.

Case: {{case.title}}
Current known status: {{case.status}}
Article headline: {{article.headline}}
Article snippet: {{article.snippet}}
Article date: {{article.date}}

Return only a JSON object matching the signal schema.
Do not summarize the article.
Do not extract case-file facts.
Do not invent details beyond the snippet and headline.

Score meanings:
- high: new verdict, arrest, charge, acquittal, sentencing, compensation order, or other direct status change
- medium: new court date, new accused named, new official action, or significant material reporting without outcome change
- noise: anniversary coverage, opinion, duplicate, or unrelated incident
