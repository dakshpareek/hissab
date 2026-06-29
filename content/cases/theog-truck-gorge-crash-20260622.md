---
title: "Theog Truck Gorge Crash"
date: 2026-06-22
location: "Theog"
category: "other"
status: "no-action"
deaths: 1
injured: 18
accused_count: null
accused_gap: "No named accused, arrests, or prosecution details were identified in the frozen source set."
summary: >-
  Google News RSS surfaced a The Tribune item reporting that one person was killed and 18 injured when a truck plunged into a gorge in Theog on 22 June 2026. A related Google News result from The Times of India described the same Theog gorge crash but rendered the injured count as 23, so the case keeps the The Tribune count and flags the injury-count conflict.
tags: ["theog", "truck-crash", "gorge", "fatality", "injury"]
last_updated: 2026-06-29
---

accused: []

compensation:
  announced: false
  announced_amount: null
  paid: "none"
  paid_note: "No compensation reporting was frozen for this draft."
  source: null

timeline:
  - date: 2026-06-22
    type: "red"
    event: "The exact-title Google News RSS feed surfaced the The Tribune headline 'One killed, 18 injured as truck plunges into gorge in Theog - The Tribune'."
    source: "https://news.google.com/rss/search?q=%22One%20killed%2C%2018%20injured%20as%20truck%20plunges%20into%20gorge%20in%20Theog%22&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-22
    type: "amber"
    event: "A related Google News RSS search result surfaced the The Times of India headline 'One killed, 23 injured as wedding band truck plunges into Theog gorge - The Times of India', which appears to describe the same incident but renders the injured count as 23."
    source: "https://news.google.com/rss/search?q=Theog+truck+plunges+gorge&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"

## Conflict notes

- "The Tribune exact-title RSS feed says 18 injured, while a related The Times of India Google News result says 23 injured for the Theog gorge crash. The case keeps injured: 18 and records the discrepancy instead of reconciling it by guesswork."

## Evidence map

- `title` → The exact-title RSS item title is `One killed, 18 injured as truck plunges into gorge in Theog - The Tribune`.
- `date` → The RSS `pubDate` is `Mon, 22 Jun 2026 19:47:07 GMT`.
- `location` → The RSS item title says `in Theog`.
- `deaths` → The RSS item title says `One killed`.
- `injured` → The RSS item title says `18 injured`.
- `status` → The frozen source set reports a road accident and casualty counts, but no named accused, arrests, or prosecution details, so `no-action` is appropriate.
- `accused_count` → No named accused, arrests, or prosecution details were identified in the frozen source set, so this remains null.
- `summary` → Supported by the The Tribune RSS item and the related The Times of India Google News result that preserves the injury-count conflict.

## Frozen source notes

- The queue signal pointed to a Google News article wrapper, which was frozen separately.
- The primary extraction relied on the exact-title Google News RSS feed.
- A related Google News RSS result from The Times of India was frozen as a conflict reference.
- Direct publisher article text was not separately recovered in this run.
