---
case_slug: gorkha-indian-pilgrims-road-accident-20260622
case_file: C:/Users/rdpuser/projects/hissab/content/cases/gorkha-indian-pilgrims-road-accident-20260315.md
queue_signal:
  signal_id: gorkha-indian-pilgrims-road-accident-20260622
  case_id: gorkha-indian-pilgrims-road-accident-20260622
  score: high
  reason_category: incident_fatalities
  source_url: https://news.google.com/rss/articles/CBMiowFBVV95cUxQN2F0dmN3Mm5nSnR6REc5V1BpUVFfQnRTZVpiUTkyZlBCLUg1VWh3Wks4WEdNdTVkMkl3OFQtd0ExdU9uM1M0REtBXzItOGwzTHhKaE9YbjBfQlBVeUxzaWMyZ3ZzYWhFSUtCanVpdzhobVFfZk83OE51bEZOWDcwSkJleHo1WTgwOFd3YUtBcTU1amFTcFRNOEVIc201QjZEck80?oc=5
  article_date: 2026-06-22T22:10:26+00:00
  headline_snippet: "Nepal: Seven Indian pilgrims killed in a road accident in Gorkha district - News On AIR"
  captured_at: 2026-06-23T16:58:42+05:30
  status: done
  dedupe_key: gorkha-indian-pilgrims-road-accident-20260622|https://news.google.com/rss/articles/CBMiowFBVV95cUxQN2F0dmN3Mm5nSnR6REc5V1BpUVFfQnRTZVpiUTkyZlBCLUg1VWh3Wks4WEdNdTVkMkl3OFQtd0ExdU9uM1M0REtBXzItOGwzTHhKaE9YbjBfQlBVeUxzaWMyZ3ZzYWhFSUtCanVpdzhobVFfZk83OE51bEZOWDcwSkJleHo1WTgwOFd3YUtBcTU1amFTcFRNOEVIc201QjZEck80?oc=5
queue_claim:
  claim_id: gorkha-indian-pilgrims-road-accident-20260622
  claimed_at: 2026-07-01T05:10:08+05:30
  queue_name: agent-workflows/case-queue/update-queue.json
record_snapshot:
  incident_name: "Gorkha Indian Pilgrims Road Accident"
  incident_location: "Kantar, Shahid Lakhan Rural Municipality, Gorkha district, Nepal"
  incident_date: "2026-03-15"
  known_aliases:
    - "Nepal: Seven Indian pilgrims killed in a road accident in Gorkha district"
    - "Gorkha microbus accident"
    - "Nepal Gorkha road accident"
  selected_identity_source: "queue signal headline plus frozen News On AIR article page and Google News RSS exact-title search feed"
  current_case_file: "C:/Users/rdpuser/projects/hissab/content/cases/gorkha-indian-pilgrims-road-accident-20260315.md"
  observed_syntax_issues: []
conflict_notes:
  - "The queue signal was captured on 22 June 2026, but the frozen News On AIR article page is dated 15 March 2026; this run follows the publisher article's date and content for the case record."
frozen_sources:
  - source_name: "News On AIR article page"
    source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
    publication_name: "News On AIR"
    frozen_path: "C:/Users/rdpuser/projects/hissab/agent-workflows/case-editorial/references/cases/gorkha-indian-pilgrims-road-accident-20260622/2026-07-01-gorkha-indian-pilgrims-road-accident-20260622-newsonair.html"
    frozen_at: "2026-07-01T05:15:27+05:30"
    status: "frozen"
    sha256: "5fb04f0fe9dc4ed9108f4c9b9827a38f1f17e857c4a5553e2cb636bad1f22ef9"
  - source_name: "Google News article wrapper"
    source_url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxQN2F0dmN3Mm5nSnR6REc5V1BpUVFfQnRTZVpiUTkyZlBCLUg1VWh3Wks4WEdNdTVkMkl3OFQtd0ExdU9uM1M0REtBXzItOGwzTHhKaE9YbjBfQlBVeUxzaWMyZ3ZzYWhFSUtCanVpdzhobVFfZk83OE51bEZOWDcwSkJleHo1WTgwOFd3YUtBcTU1amFTcFRNOEVIc201QjZEck80?oc=5"
    publication_name: "Google News"
    frozen_path: "C:/Users/rdpuser/projects/hissab/agent-workflows/case-editorial/references/cases/gorkha-indian-pilgrims-road-accident-20260622/2026-07-01-gorkha-indian-pilgrims-road-accident-20260622-google-news-wrapper.html"
    frozen_at: "2026-07-01T05:15:27+05:30"
    status: "frozen"
    sha256: "90e99c7021194e9d36bf445e903441ba99b683b3c971bcc3a68d980542dfdf0d"
  - source_name: "Google News RSS exact-title search feed"
    source_url: "https://news.google.com/rss/search?q=%22Nepal%3A%20Seven%20Indian%20pilgrims%20killed%20in%20a%20road%20accident%20in%20Gorkha%20district%22&hl=en-IN&gl=IN&ceid=IN:en"
    publication_name: "Google News RSS"
    frozen_path: "C:/Users/rdpuser/projects/hissab/agent-workflows/case-editorial/references/cases/gorkha-indian-pilgrims-road-accident-20260622/2026-07-01-gorkha-indian-pilgrims-road-accident-20260622-google-news-rss-search.xml"
    frozen_at: "2026-07-01T05:15:27+05:30"
    status: "frozen"
    sha256: "ea8da3cf3f5142759b5ef0babe0eeb9489b25d7e5c8d106b61af5520fc85f96d"
identity_gate:
  verdict: MATCH
  notes: "The frozen News On AIR article page and the Google News RSS exact-title feed describe the same Gorkha microbus crash, agree on the victim count, and anchor the location and publication title."
  supporting_quotes:
    - "Nepal: Seven Indian pilgrims killed in a road accident in Gorkha district"
    - "News On AIR | March 15, 2026 4:19 PM"
    - "In Nepal, seven Indian pilgrims were killed and several others injured after a microbus met with an accident in Gorkha district last evening."
    - "Seven other passengers were injured and have been rescued."
extraction_record:
  field_updates:
    title: "Gorkha Indian Pilgrims Road Accident"
    date: 2026-03-15
    location: "Kantar, Shahid Lakhan Rural Municipality, Gorkha district, Nepal"
    category: "other"
    status: "no-action"
    deaths: 7
    injured: 8
    accused_count: null
    accused_gap: "No named accused, arrests, or prosecution details were identified in the frozen source set."
    summary: "News On AIR reported that seven Indian pilgrims were killed and eight people were injured when a microbus returning from the Manakamana temple plunged off the road in Gorkha district, Nepal, on 15 March 2026. The article says the exact cause remains under investigation and the frozen source set does not identify any named accused, arrests, or prosecution details."
    tags:
      - "nepal"
      - "gorkha"
      - "road-accident"
      - "microbus"
      - "pilgrims"
      - "fatality"
      - "manakamana"
    last_updated: 2026-07-01
  evidence_map:
    - field_name: "title"
      value: "Gorkha Indian Pilgrims Road Accident"
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "Nepal: Seven Indian pilgrims killed in a road accident in Gorkha district"
    - field_name: "date"
      value: "2026-03-15"
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "News On AIR | March 15, 2026 4:19 PM"
    - field_name: "location"
      value: "Kantar, Shahid Lakhan Rural Municipality, Gorkha district, Nepal"
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "in Gorkha district last evening"
    - field_name: "deaths"
      value: 7
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "seven Indian pilgrims were killed"
    - field_name: "injured"
      value: 8
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "Seven other passengers were injured and have been rescued."
    - field_name: "status"
      value: "no-action"
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "The exact cause of the accident is yet to be determined, and further investigation is underway."
    - field_name: "accused_count"
      value: null
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "further investigation is underway"
    - field_name: "accused_gap"
      value: "No named accused, arrests, or prosecution details were identified in the frozen source set."
      source_url: "https://newsonair.gov.in/seven-indian-pilgrims-killed-in-microbus-accident-in-nepals-gorkha-district/"
      exact_quote: "further investigation is underway"
---

# Snapshot

This is the run snapshot for the Gorkha Indian Pilgrims Road Accident case.

- incident_name: "Gorkha Indian Pilgrims Road Accident"
- incident_location: "Kantar, Shahid Lakhan Rural Municipality, Gorkha district, Nepal"
- incident_date: "2026-03-15"
- known_aliases: ["Nepal: Seven Indian pilgrims killed in a road accident in Gorkha district", "Gorkha microbus accident", "Nepal Gorkha road accident"]
- selected_identity_source: "queue signal headline plus frozen News On AIR article page and Google News RSS exact-title search feed"
- current_case_file: "C:/Users/rdpuser/projects/hissab/content/cases/gorkha-indian-pilgrims-road-accident-20260315.md"
- observed_syntax_issues: []
- duplicate_check: "No exact or near-duplicate case record was found in content/cases."
