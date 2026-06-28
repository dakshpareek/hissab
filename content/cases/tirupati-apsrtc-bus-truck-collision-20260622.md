---
title: "Tirupati APSRTC Bus-Truck Collision"
date: 2026-06-22
location: "NH-716 near Tirupati"
category: "other"
status: "no-action"
deaths: 3
injured: null
accused_count: null
accused_gap: "No named accused, arrests, or prosecution details were identified in the frozen source set."
summary: "The Hindu's Google News RSS listing reported that three people were killed and over 15 injured when an APSRTC bus collided with a truck on NH-716 near Tirupati on 22 June 2026. The frozen source set does not identify named accused or arrests, so the case remains no-action."
tags: ["andhra-pradesh", "tirupati", "road-accident", "bus-crash", "truck-collision", "fatality"]
last_updated: 2026-06-28
accused: []
compensation:
  announced: false
  announced_amount: null
  paid: "none"
  paid_note: "No compensation reporting was identified in the frozen source set."
  source: null
timeline:
  - date: 2026-06-22
    type: "red"
    event: "The Hindu's Google News RSS listing said three people were killed and over 15 injured in an APSRTC bus-truck collision on NH-716 near Tirupati."
    source: "https://news.google.com/rss/search?q=Three+dead+over+15+injured+APSRTC+bus-truck+collision+on+NH-716+near+Tirupati&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-22
    type: "gray"
    event: "The frozen source text identifies the incident as a bus-truck collision and does not name any accused, arrests, or prosecution details."
    source: "https://news.google.com/rss/search?q=Three+dead+over+15+injured+APSRTC+bus-truck+collision+on+NH-716+near+Tirupati&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
conflict_notes:
  - "The source says 'over 15 injured'; the exact injury count is not specified, so injured remains null."
---

## Evidence notes

- `title` → The frozen Google News RSS search feed item title is `Three dead, over 15 injured in APSRTC bus-truck collision on NH-716 near Tirupati - The Hindu`.
- `date` → The RSS item `pubDate` is `Mon, 22 Jun 2026 09:50:12 GMT`, which normalizes to 2026-06-22.
- `location` → The RSS item title says `on NH-716 near Tirupati`.
- `deaths` → The RSS item title says `Three dead`.
- `injured` → The RSS item title says `over 15 injured`, which is not a precise count, so the field remains null.
- `summary` → Supported by the RSS title and the absence of any named accused or arrest details in the frozen source set.
- `status` → No named accused, arrests, or prosecution details were identified in the frozen source set, so `no-action` is appropriate.
- `tags` → Derived from the incident type and location language in the frozen title.

## Frozen source notes

- The frozen source set consists of a Google News RSS search feed plus the corresponding Google News article wrapper.
- Direct publisher pages were not used in this environment.
- Repo search found no existing Tirupati case file; the closest related records were `jalpaiguri-nh27-bus-truck-collision-20260621` and `vadodara-bus-truck-crash`, which are different incidents.
