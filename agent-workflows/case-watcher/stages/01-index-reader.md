---
id: index-reader
role: orchestrator
reads_from_state: [none]
writes_to_state: [case_registry]
---

# Stage 1 — Read the case registry

## Objective
Load the tracked cases and their watcher hints.

## Inputs
- `schemas/case-list.yaml`

## Rules
- Read only.
- Do not edit the registry.
- Do not fetch source pages yet.

## Output
Write:
- `case_registry`

## Gate
If the registry cannot be parsed, stop and surface the error.
