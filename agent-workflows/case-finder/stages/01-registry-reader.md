# Registry Reader

## Objective
Load the source registry for monitored incidents, aliases, and trusted discovery sources.

## Inputs
- `schemas/source-registry.yaml`
- prior run state from `schemas/finder-state.schema.json`

## Output
- a normalized working set of case identities, aliases, and search terms

## Rules
- Do not scan the open web yet.
- Do not edit any case file.
- Do not freeze source text.
- Keep the registry minimal and explicit.
