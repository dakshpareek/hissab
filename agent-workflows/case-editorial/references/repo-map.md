# Repo Map for the Case Editorial Workflow

## Canonical files
- `content/cases/*.md` — source case records
- `archetypes/cases.md` — template for new case files
- `content/cases/_index.md` — cases section intro
- `hugo.toml` — site configuration and taxonomies
- `public/` — generated site output; do not edit manually
- `agent-workflows/case-editorial/stages/00-queue-intake.md` — queue claim normalization stage
- `agent-workflows/case-editorial/references/queue-policy.md` — queue coupling policy

## Case file shape
A case file is a Markdown document with YAML frontmatter. The current schema uses:
- `title`
- `date`
- `location`
- `category`
- `status`
- `deaths`
- `injured`
- `accused_count`
- `accused_gap`
- `summary`
- `tags`
- `last_updated`
- `accused[]`
- `compensation`
- `timeline[]`

## Editing rules
- Prefer the smallest possible diff.
- Keep the narrative factual and sourced.
- Never invent missing accountability details.
- Use the archive and source-freeze steps before changing a claim.
