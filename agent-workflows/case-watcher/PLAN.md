# Case Watcher Implementation Plan

> **For Hermes:** Use `subagent-driven-development` to implement this plan task-by-task after approval.

**Goal:** Build a read-only watcher that scans public sources for material case updates and emits queue signals for Case Explorer, without ever touching case files directly.

**Architecture:** The watcher is strictly upstream of Case Explorer. It scans a curated case registry on a schedule, scores potential updates, and writes only structured signals to a durable queue. Case Explorer remains the only workflow allowed to freeze sources, confirm identity, extract fields, and edit case files. This separation preserves the one-case-at-a-time discipline and prevents the watcher from bypassing editorial gates.

**Tech Stack:** Provider-neutral workflow package, YAML manifests, JSON schema, public-source search/fetch tools, durable queue (JSON or SQLite), and the existing Hissab case-editorial workflow.

---

## Design constraints

- Watcher must be read-only.
- Watcher must not freeze full article text.
- Watcher must not write case files.
- Watcher must not call Case Explorer stages directly.
- The only coupling point is a durable queue plus a shared case registry.
- Case Explorer still enforces duplicate check, snapshot, source freeze, identity gate, extraction, critic review, validation, and commit.

---

## Task 1: Define the watcher package layout

**Objective:** Create a provider-neutral package structure for the watcher workflow.

**Files:**
- Create: `agent-workflows/case-watcher/README.md`
- Create: `agent-workflows/case-watcher/manifest.yaml`
- Create: `agent-workflows/case-watcher/stages/01-index-reader.md`
- Create: `agent-workflows/case-watcher/stages/02-source-scanner.md`
- Create: `agent-workflows/case-watcher/stages/03-signal-scorer.md`
- Create: `agent-workflows/case-watcher/schemas/signal.json`
- Create: `agent-workflows/case-watcher/schemas/case-list.yaml`
- Create: `agent-workflows/case-watcher/signals/score-prompt.md`

**Step 1: Draft the manifest**
- Declare the watcher as read-only.
- Declare the scheduled nature of the workflow.
- Declare the single output channel: update queue.
- Declare the stage order and schema paths.

**Step 2: Draft the README**
- Explain the watcher’s role as an upstream signal producer.
- Explain that Case Explorer remains the only editing workflow.
- Document the queue coupling rule.

**Step 3: Draft the schemas**
- Define the signal schema.
- Define the case registry shape.
- Keep fields minimal and explicit.

**Step 4: Draft the stage contracts**
- Index reader loads the registry.
- Source scanner searches public sources.
- Signal scorer classifies materiality.

**Verification**
- Confirm the package reads as a self-contained workflow spec.
- Confirm no stage implies file edits or source freezing.

---

## Task 2: Define the shared case registry

**Objective:** Create a stable registry of monitored cases and their watch terms.

**Files:**
- Create or update: `agent-workflows/case-watcher/schemas/case-list.yaml`

**Step 1: Choose registry fields**
- `case_id`
- `title`
- `watch_terms`
- `source_urls`
- `last_checked`
- `notes`

**Step 2: Add examples**
- Include a few representative cases.
- Keep it easy to regenerate from the main case library later.

**Step 3: Document maintenance policy**
- State that the registry is the watcher’s input list.
- State that the registry may be regenerated from canonical case files.

**Verification**
- Registry can be parsed cleanly.
- Each case has enough alias coverage to be searchable.

---

## Task 3: Define the signal schema and scoring contract

**Objective:** Make watcher outputs narrow, structured, and queue-friendly.

**Files:**
- Create: `agent-workflows/case-watcher/schemas/signal.json`
- Create: `agent-workflows/case-watcher/signals/score-prompt.md`

**Step 1: Define the signal schema**
- `signal_id`
- `case_id`
- `score` (`high`, `medium`, `noise`)
- `reason_category`
- `source_url`
- `article_date`
- `headline_snippet`
- `captured_at`
- `status` (`pending`, `processing`, `done`, `held`)

**Step 2: Write the scoring prompt**
- Ask only whether the article describes a materially new update for the case.
- Prohibit summarization.
- Prohibit extraction of case facts.
- Require JSON-only output.

**Step 3: Define scoring thresholds**
- `high` = likely queue immediately
- `medium` = queue for human review or hold
- `noise` = discard

**Verification**
- The scorer can distinguish verdicts, arrests, sentencing, compensation, and noise.
- The schema cannot be mistaken for a case-file extraction schema.

---

## Task 4: Define queue coupling and dedupe rules

**Objective:** Prevent duplicate signals and queue races.

**Files:**
- Create: `agent-workflows/case-watcher/README.md` or `references/queue-policy.md`
- Update: `agent-workflows/case-watcher/manifest.yaml`

**Step 1: Pick the queue implementation**
- JSON file for simplicity, or SQLite if atomic writes are needed.

**Step 2: Define dedupe key**
- Use a stable key derived from `case_id + source_url + article_date + headline_hash`.

**Step 3: Define queue state transitions**
- `pending → processing → done | held`

**Step 4: Define consumer behavior**
- Queue consumer claims one signal at a time.
- Consumer hands the signal to Case Explorer only after locking it.

**Verification**
- Duplicate signals cannot be processed twice.
- Parallel watcher runs cannot create queue collisions.

---

## Task 5: Define the scan loop and source discovery strategy

**Objective:** Establish how the watcher finds candidate updates without overreaching.

**Files:**
- Create: `agent-workflows/case-watcher/stages/02-source-scanner.md`
- Update: `agent-workflows/case-watcher/README.md`

**Step 1: Specify search strategy**
- Use registry watch terms plus case-specific aliases.
- Prefer direct articles from trusted publications.
- Limit scan depth and result count per case.

**Step 2: Specify date filtering**
- Search only since `last_checked` where possible.

**Step 3: Specify scan output**
- Candidate article URLs
- Headline snippets
- Publication names
- Dates

**Step 4: Keep watcher read-only**
- No source freezing.
- No direct case edits.
- No field extraction.

**Verification**
- The scanner returns candidate articles only.
- The scanner never creates record updates by itself.

---

## Task 6: Define Case Explorer handoff

**Objective:** Make it explicit how a watcher signal becomes a Case Explorer run.

**Files:**
- Update: `agent-workflows/case-watcher/README.md`
- Update: `agent-workflows/case-editorial/README.md` if needed

**Step 1: Document the handoff contract**
- A watcher signal only means “review this case.”
- Case Explorer still performs duplicate check, snapshot, freeze, identity gate, extraction, critic, validation, and commit.

**Step 2: Document trigger policy**
- High signals may auto-enqueue.
- Medium signals should default to held or human review.
- Noisy signals should be dropped.

**Step 3: Document failure policy**
- If Case Explorer rejects the identity or validation fails, the signal remains traceable.

**Verification**
- The handoff cannot bypass the editorial workflow.
- The watcher cannot write to case files.

---

## Task 7: Add operational notes and examples

**Objective:** Make the package easy to run by any future agent runtime.

**Files:**
- Update: `agent-workflows/case-watcher/README.md`

**Step 1: Add a sample registry entry**
- Show a fully populated case entry.

**Step 2: Add a sample signal**
- Show a high-scoring signal and a held medium signal.

**Step 3: Add a sample queue record**
- Show pending/processing/done transitions.

**Step 4: Add the anti-patterns**
- Pre-freezing text in the watcher
- Triggering edits directly
- Treating snippets as case evidence

**Verification**
- A new implementer can understand the architecture from the README alone.

---

## Final validation

Before implementation begins, confirm:

- [ ] Watcher is explicitly read-only
- [ ] Case Explorer remains the only editing workflow
- [ ] Queue is the only coupling point
- [ ] Signal schema is separate from case extraction schema
- [ ] Dedupe rules are defined
- [ ] Medium signals have a hold/review path
- [ ] The watcher never freezes source text
- [ ] The handoff cannot bypass identity gate or critic review

---

## Execution note

After this plan is approved, execute it using `subagent-driven-development` with a fresh subagent per task and two-stage review for any code-bearing change.
