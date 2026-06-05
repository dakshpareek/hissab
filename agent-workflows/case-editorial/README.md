# Case Editorial Workflow Package

This directory is a provider-neutral, agent-readable workflow package for Hissab case maintenance.

## What it is

A complete spec bundle for building or correcting one case record at a time without embedding any Claude/OpenAI/OpenClaw-specific code.

It contains:
- `manifest.yaml` — entry point and stage graph
- `stages/` — one file per workflow stage
- `schemas/` — JSON Schemas for state and extracted records
- `gates/` — hard rules and routing conditions
- `references/` — repo-specific operating notes and validation checklists
- `tools/` — tool contracts an invoking agent must satisfy

## Workflow modes

- **new-case**: no existing case file is present; start with duplicate checking, then snapshot incident identity inputs, freeze sources, confirm identity, extract, critic review, validate, and commit.
- **repair-existing-case**: an existing case file is present; snapshot the file first, then freeze sources, confirm identity, extract, critic review, validate, and commit.
- **queued-case**: a watcher-emitted queue signal is present; claim one queued item, then run the same one-case-at-a-time editorial flow.

## How an agent should use it

1. Read `manifest.yaml`.
2. Load the stage file for the current stage.
3. Read/write `schemas/state-store.schema.json`-compatible state.
4. Execute the stage contract exactly.
5. Pass through the defined gates before moving on.
6. Validate the final file against the checklist before commit.
7. Commit exactly one corrected case file only after validation passes.

## Scope

- One case file at a time
- Freeze sources before extraction
- Null instead of inference
- Identity gate before extraction
- Critic pass before commit
- Build verification after file write

## Repo-specific targets

- Case content lives in `content/cases/*.md`
- Template lives in `archetypes/cases.md`
- Site config lives in `hugo.toml`
- Built output is in `public/` and should not be edited manually

## Notes

This package is intentionally free of provider SDK code. Any sufficiently capable agent can execute it if it can read files, write files, fetch sources, and validate YAML/JSON.
