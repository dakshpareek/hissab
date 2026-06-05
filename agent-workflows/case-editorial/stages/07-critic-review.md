---
id: critic-review
role: critic
reads_from_state: [draft_diff, frozen_sources, extraction_record, conflict_notes]
writes_to_state: [critic_review]
---

# Stage 7 — Critic review

## Objective
Reject any claim in the draft that is not directly proven by the frozen sources.

## Rules
- Fresh context only.
- The critic may not rely on the worker's reasoning.
- Review the draft claim by claim.
- If a claim lacks direct support, reject it.
- Check whether every populated field has at least one exact supporting quote.
- Check that unresolved items remain null rather than inferred.

## Output
Write:
- verdict: APPROVED or REJECT_CHANGES
- rejected_claims[]
- required_fixes[]
- notes

## Gate
At most two revision loops are allowed before escalation to human review.

## Approval path
If the draft is approved, hand control to `validate` before `commit`.
