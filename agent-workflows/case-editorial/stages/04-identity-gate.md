---
id: identity-gate
role: orchestrator
reads_from_state: [record_snapshot, frozen_sources]
writes_to_state: [identity_gate]
---

# Stage 4 — Verify incident identity

## Objective
Confirm the frozen sources describe the same physical incident as the selected case record.

## Inputs
- The snapshot title, date, and location
- The frozen source text
- Any known incident aliases from the duplicate step

## Rules
- This is a hard stop gate.
- Do not extract fields until the identity is clearly confirmed.
- If the source describes a different incident, rename or retarget the case before continuing.
- If the answer is ambiguous, stop and escalate.
- For common or generic incident names, require at least two independent anchors such as location, date/time, and facility name.

## Output
Write:
- `verdict`: `MATCH`, `MISMATCH`, or `UNCLEAR`
- `notes`
- `supporting_quotes[]`

## Gate
Only `MATCH` may proceed to extraction.
