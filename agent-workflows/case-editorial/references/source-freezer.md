# Source Freezing Notes

The frozen source artifact is the single source of truth for the worker and critic.

## Requirements
- Save each fetched source as a text artifact
- Record the source URL and publication name
- Record the freeze timestamp
- Prefer the exact article text, not summaries
- Preserve the frozen artifact for the whole session

## Recommended artifact naming
`references/cases/<case-slug>/<YYYY-MM-DD>-<source-slug>.txt`

## Fallback policy
If the live page fails:
- retry once with a simpler fetch path
- use an alternate cached or archived copy if available
- record the fallback path in state
