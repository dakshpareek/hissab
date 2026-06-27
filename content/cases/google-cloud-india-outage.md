---
title: "Google Cloud Outage in India"
date: 2026-06-09
location: "India"
category: "other"
status: "no-action"
deaths: null
injured: null
accused_count: null
accused_gap: "No accused, arrests, or prosecution details were identified in the frozen source set."
summary: >-
  Google News RSS results surfaced a Reuters headline saying Google Cloud outage in India after third-party data centre fire triggers shutdown, and a TradingView republication with the same Reuters title. The frozen source set does not identify casualties, named accused, or prosecution details.
tags: ["india", "google-cloud", "outage", "data-centre-fire", "infrastructure", "reuters"]
last_updated: 2026-06-28
---

accused: []

compensation:
  announced: false
  announced_amount: ""
  paid: "none"
  paid_note: "No compensation reporting was frozen for this draft."
  source: ""

timeline:
  - date: 2026-06-09
    type: "gray"
    event: "Google News RSS surfaced a Reuters headline reporting a Google Cloud outage in India after a third-party data centre fire triggered shutdown."
    source: "https://news.google.com/rss/search?q=Google+Cloud+outage+in+India+after+third-party+data+centre+fire+triggers+shutdown+Reuters&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS / Reuters"
  - date: 2026-06-09
    type: "blue"
    event: "The same Google News RSS query also surfaced a TradingView republication with the same Reuters headline."
    source: "https://news.google.com/rss/search?q=Google+Cloud+outage+in+India+after+third-party+data+centre+fire+triggers+shutdown+Reuters&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS / TradingView"

## Evidence map

- `title` → The frozen RSS feed item title is "Google Cloud outage in India after third-party data centre fire triggers shutdown - Reuters".
- `date` → The RSS item pubDate is `Tue, 09 Jun 2026 07:00:00 GMT`, matching the incident date in the queue signal.
- `location` → The title says "in India".
- `status` → The frozen source set is headline-level reporting and does not identify arrests, prosecution details, or any active legal action.
- `deaths` → No casualty count is stated in the frozen source set, so this remains null.
- `injured` → No injury count is stated in the frozen source set, so this remains null.
- `accused_count` → No accused, arrests, or prosecution details were identified in the frozen source set, so this remains null.
- `summary` → Supported by the Reuters title in the frozen Google News RSS feed and the additional TradingView republication carrying the same wording.

## Frozen source notes

- Direct publisher pages were not accessible in this environment, so the Google News RSS search feed and the Google News article wrapper were frozen as fallback artifacts.
- The frozen feed preserves the Reuters headline verbatim and also shows a TradingView republication of the same title.

## Conflict notes

- None. The source set is sparse, but it is internally consistent at the headline level.
