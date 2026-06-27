---
title: "Delhi Hotel Fire"
date: 2026-06-03
location: "Delhi"
category: "fire"
status: "no-action"
deaths: 21
injured: null
accused_count: null
accused_gap: null
summary: >-
  Reuters via Google News reported that twelve foreign nationals were among 21 people killed in a hotel fire in Delhi. The frozen source set supports the casualty count and location but does not identify any named accused, arrests, prosecution details, or injury count.
tags: ["delhi", "india", "fire", "hotel-fire", "fatality"]
last_updated: 2026-06-27
---

accused: []

compensation:
  announced: false
  announced_amount: ""
  paid: "none"
  paid_note: "No compensation reporting was frozen for this draft."
  source: ""

timeline:
  - date: 2026-06-03
    type: "red"
    event: "Google News RSS surfaced the Reuters headline 'Twelve foreign nationals among 21 killed in Delhi hotel fire - Reuters'."
    source: "https://news.google.com/rss/search?q=%22Twelve+foreign+nationals+among+21+killed+in+Delhi+hotel+fire%22+Reuters&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Reuters via Google News RSS"

## Evidence map

- `title` → The frozen Google News RSS item title is 'Twelve foreign nationals among 21 killed in Delhi hotel fire - Reuters'.
- `date` → The frozen RSS item `pubDate` is `Wed, 03 Jun 2026 07:00:00 GMT`, which normalizes to `2026-06-03`.
- `location` → The frozen item title names Delhi.
- `deaths` → The frozen item title says `21 killed`.
- `summary` → Supported by the Reuters headline and the frozen RSS publication date.
- `injured` → The frozen source set does not provide an injury count, so this remains null.
- `accused_count` → No named accused, arrests, or prosecution details were identified in the frozen source set, so this remains null.
- `accused_gap` → The frozen source set does not support a specific accountability gap statement, so this remains null.
- `status` → No accountability action was identified in the frozen source set, so `no-action` fits.

## Frozen source notes

- The queue-supplied Google News article URL rendered only Google News shell HTML in this environment, so the exact-title Google News RSS search feed was used as the frozen fallback artifact.
- No exact or near-duplicate Delhi hotel-fire case file was found in `content/cases` before drafting this record.
- The frozen source artifact is stored under `agent-workflows/case-editorial/references/cases/delhi-hotel-fire/2026-06-27/`.

## Conflict notes

- None. The frozen source set is internally consistent for the title, date, and casualty count.
