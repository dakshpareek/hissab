---
title: "Udharbond Tea Garden Workers Bus Accident"
date: 2026-06-22
location: "Udharbond, Assam"
category: "other"
status: "no-action"
deaths: null
injured: null
accused_count: null
accused_gap: "No named accused, arrests, or prosecution details were identified in the frozen source set."
summary: >-
  Google News RSS items reported a bus accident involving tea garden workers in Assam's Udharbond. The India Today NE item said over 40 tea garden workers were injured, Northeast Live said around 25 were injured in Assam's Cachar, and Barak Bulletin said over 40 were injured after the bus carrying tea workers overturned. The frozen source set does not identify any named accused, arrests, or prosecution details.
tags: ["assam", "udharbond", "cachar", "tea-workers", "bus-accident", "road-accident"]
last_updated: 2026-06-29
accused: []
compensation:
  announced: false
  announced_amount: null
  paid: "none"
  paid_note: "No compensation reporting was frozen in the source set."
  source: null
timeline:
  - date: 2026-06-22
    type: "red"
    event: "The India Today NE Google News RSS item reported that over 40 tea garden workers were injured in a bus accident in Assam's Udharbond."
    source: "https://news.google.com/rss/search?q=Udharbond+bus+accident+tea+garden+workers&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "India Today NE"
  - date: 2026-06-22
    type: "amber"
    event: "The Northeast Live Google News RSS item said around 25 tea garden workers were injured after a bus carrying tea garden workers crashed in Assam's Cachar."
    source: "https://news.google.com/rss/search?q=Udharbond+bus+accident+tea+garden+workers&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Northeast Live"
  - date: 2026-06-22
    type: "amber"
    event: "The Barak Bulletin Google News RSS item said a bus carrying tea workers overturned in Cachar and over 40 were injured."
    source: "https://news.google.com/rss/search?q=Udharbond+bus+accident+tea+garden+workers&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Barak Bulletin"
conflict_notes:
  - "The India Today NE item says over 40 injured in Udharbond, the Northeast Live item says around 25 injured in Cachar, and the Barak Bulletin item says over 40 injured in Cachar; the case keeps injured null because the frozen set does not supply a precise casualty count."
  - "The source wording varies between Udharbond and Cachar, but the items describe the same bus accident involving tea garden workers in Assam."
---

## Evidence map

- `title` → The RSS search feed item titles include `Over 40 tea garden workers injured in bus accident in Assam's Udharbond - India Today NE`, `Around 25 Injured After Bus Carrying Tea Garden Workers Crashes in Assam’s Cachar - Northeast Live`, and `Major Accident in Cachar: Bus Carrying Tea Workers Overturns, Over 40 Injured - Barak Bulletin`.
- `date` → The RSS item `pubDate` values are `Mon, 22 Jun 2026 16:34:08 GMT`, `Mon, 22 Jun 2026 15:41:31 GMT`, and `Mon, 22 Jun 2026 14:02:06 GMT`, which normalize to 2026-06-22.
- `location` → The frozen titles place the incident in `Assam's Udharbond` and `Assam's Cachar`.
- `injured` → The frozen titles give conflicting approximate counts (`over 40` and `around 25`), so the field remains null.
- `accused_count` → No named accused, arrests, or prosecution details were identified in the frozen source set.
- `summary` → Supported by the three RSS item titles and the lack of any named accused or arrest details.
- `status` → The frozen source set reports the bus accident and casualty estimates but no legal action or accused names, so `no-action` is appropriate.

## Frozen source notes

- The queue signal pointed to a Google News RSS wrapper, so the incident headline was frozen through a Google News RSS search feed that surfaced multiple publisher items on the same incident.
- Direct publisher pages were not used in this run.
- Repo search found no existing Udharbond case file or near-duplicate incident record in `content/cases`.
