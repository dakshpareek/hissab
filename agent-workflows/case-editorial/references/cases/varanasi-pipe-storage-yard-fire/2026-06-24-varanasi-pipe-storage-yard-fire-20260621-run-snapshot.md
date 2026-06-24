---
case_slug: varanasi-pipe-storage-yard-fire
case_file: C:/Users/rdpuser/projects/hissab/content/cases/varanasi-pipe-storage-yard-fire.md
queue_signal:
  signal_id: varanasi-pipe-storage-yard-fire-20260621
  case_id: varanasi-pipe-storage-yard-fire
  score: medium
  reason_category: industrial_fire
  source_url: https://news.google.com/rss/articles/CBMi4wFBVV95cUxOd283b2tZZXBsbUJiaDNFN2p5T2xYOWtHWmtoRTduMDJqelQzSVp3dUE0b2xsOUdYYXhlSWZkSWtZcnJlNmVGdUxhU2VGRkJMYkk2NDBYX1R0NEd1TDVreEtOS2dRbzMxbl8yR0RQN2Z0WGxkeW9KVkNMRmlIYXhMWmxKWl81bFVQbnR2UlNXX21NR3MxQVVOX2ZuSlNkd29HWDBDb0VTZE9MUDZQTG5YSWxWOU15bmJTVFp1N0lYR00yLVFla0dOUFJEaVRNZHNxMm8xRE9mX0MyUDhZakkzdlRFWQ?oc=5
  headline_snippet: "UP: Massive fire breaks out at pipe storage yard near Babatpur CNG station in Varanasi - ANI News"
  captured_at: 2026-06-24T10:48:51+05:30
  status: done
  dedupe_key: varanasi-pipe-storage-yard-fire|https://news.google.com/rss/articles/CBMi4wFBVV95cUxOd283b2tZZXBsbUJiaDNFN2p5T2xYOWtHWmtoRTduMDJqelQzSVp3dUE0b2xsOUdYYXhlSWZkSWtZcnJlNmVGdUxhU2VGRkJMYkk2NDBYX1R0NEd1TDVreEtOS2dRbzMxbl8yR0RQN2Z0WGxkeW9KVkNMRmlIYXhMWmxKWl81bFVQbnR2UlNXX21NR3MxQVVOX2ZuSlNkd29HWDBDb0VTZE9MUDZQTG5YSWxWOU15bmJTVFp1N0lYR00yLVFla0dOUFJEaVRNZHNxMm8xRE9mX0MyUDhZakkzdlRFWQ?oc=5
queue_claim:
  claim_id: varanasi-pipe-storage-yard-fire-20260621
  claimed_at: 2026-06-24T10:48:51+05:30
  queue_name: agent-workflows/case-queue/update-queue.json
record_snapshot:
  incident_name: Varanasi pipe storage yard fire
  incident_location: "Babatpur area, Varanasi, Uttar Pradesh"
  known_aliases:
    - "UP fire at pipe storage yard near Babatpur CNG station"
    - "Babatpur CNG station fire"
    - "Varanasi CNG pipe storage fire"
  selected_identity_source: queue signal headline snippet plus ANI/Webindia123 fallback article text
  current_case_file: null
duplicate_guard:
  matched: false
  match_slug: null
  reason: "No exact or near-duplicate case record was found in content/cases."
frozen_sources:
  - source_name: "ANI News via Webindia123"
    source_url: "https://www.aninews.in/news/national/general-news/up-massive-fire-breaks-out-at-pipe-storage-yard-near-babatpur-cng-station-in-varanasi20260620033219/"
    publication_name: "ANI News"
    frozen_path: "agent-workflows/case-editorial/references/cases/varanasi-pipe-storage-yard-fire/2026-06-24-varanasi-pipe-storage-yard-fire-20260621-source-fallback.txt"
    frozen_at: "2026-06-24T10:53:07+05:30"
    status: fallback
    sha256: "40981b8c3cb1ead312eec2e746f98eebe783f7a5a9d344500251767854957a1b"
identity_gate:
  verdict: MATCH
  notes: "The frozen ANI/Webindia123 article matches the queue signal on location, incident type, and date. The article body says the fire occurred in the Babatpur area of Varanasi, that the blaze was brought under control, and that no casualties were reported so far."
  supporting_quotes:
    - "UP: Massive fire breaks out at pipe storage yard near Babatpur CNG station in Varanasi"
    - "A massive fire broke out at a pipe storage yard located behind a CNG station in the Babatpur area of Varanasi, officials said."
    - "The fire has now been brought under control, and no casualties have been reported so far."
extraction_record:
  field_updates:
    title: "Varanasi Pipe Storage Yard Fire"
    date: "2026-06-20"
    location: "Babatpur area, Varanasi, Uttar Pradesh"
    category: "fire"
    status: "no-action"
    deaths: 0
    injured: 0
    accused_count: 0
    accused_gap: "No public accused named or arrests reported in the frozen source."
    summary: "A fire broke out at a pipe storage yard behind a CNG station in the Babatpur area of Varanasi, Uttar Pradesh. The frozen article says several fire tenders responded, the blaze was brought under control, no casualties were reported so far, and an investigation was initiated to determine the cause."
    tags:
      - "varanasi"
      - "uttar-pradesh"
      - "fire"
      - "industrial-fire"
      - "cng"
    last_updated: "2026-06-24"
    accused: []
    compensation:
      announced: false
      announced_amount: ""
      paid: "none"
      paid_note: "No compensation reporting was frozen."
      source: ""
    timeline:
      - date: "2026-06-20"
        type: "red"
        event: "A fire broke out at a pipe storage yard behind a CNG station in the Babatpur area of Varanasi."
        source: "https://www.aninews.in/news/national/general-news/up-massive-fire-breaks-out-at-pipe-storage-yard-near-babatpur-cng-station-in-varanasi20260620033219/"
        source_name: "ANI News"
      - date: "2026-06-20"
        type: "gray"
        event: "Several fire tenders controlled the blaze, no casualties were reported so far, and an investigation was initiated to determine the cause."
        source: "https://www.aninews.in/news/national/general-news/up-massive-fire-breaks-out-at-pipe-storage-yard-near-babatpur-cng-station-in-varanasi20260620033219/"
        source_name: "ANI News"
conflict_notes: []
draft_diff: "Created a new case file from the ANI/Webindia123 fire report, preserving unsupported facts as null or zero only where the article explicitly reported no casualties."
critic_review:
  verdict: APPROVED
  rejected_claims: []
  required_fixes: []
  notes: "All populated fields in the draft case file are directly supported by the frozen article text."
validation:
  yaml_valid: true
  sources_valid: true
  build_ok: true
  duplicate_check_ok: true
  passed: true
  notes: "The case file frontmatter parses cleanly, the source was frozen from a fallback mirror after the original ANI URL returned 403, duplicate search found no near-match in content/cases, and the Hugo build completed successfully."
commit_ready: true
pushed_to_remote: false
---

# Run snapshot

## Summary

Queued case processed end-to-end for `varanasi-pipe-storage-yard-fire`.

### Outcome
- Duplicate check: negative
- Source freeze: fallback mirror used for ANI article
- Identity gate: MATCH
- Extraction: complete
- Critic review: APPROVED
- Validation: passed
- Commit readiness: yes
- Remote push: pending

## Notes

- The original ANI URL returned HTTP 403 in this environment, so the article was frozen from a Webindia123 mirror carrying the same ANI story and metadata.
- The case keeps unsupported facts conservative: casualties were set to zero because the article explicitly says no casualties were reported so far; no accused or compensation were named.
- The unrelated local-news block later in the mirrored page was ignored for extraction because it describes a separate incident.
