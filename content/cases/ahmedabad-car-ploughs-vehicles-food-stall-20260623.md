---
title: "Ahmedabad Car Ploughs Into Vehicles and Food Stall"
date: 2026-06-23
location: "Ahmedabad, Gujarat"
category: "other"
status: "no-action"
deaths: 1
injured: null
accused_count: null
accused_gap: "No public accused, arrests, or prosecution details were identified in the frozen source set."
summary: >-
  Google News RSS surfaced India Today's report that an out-of-control car ploughed into vehicles and a food stall in Ahmedabad on 23 June 2026, killing one person.
  The frozen source set does not identify any named accused, arrests, or compensation details, so the case remains no-action.
tags: ["gujarat", "ahmedabad", "car-crash", "road-accident", "fatality", "runaway-vehicle"]
last_updated: 2026-07-01

accused: []

compensation:
  announced: false
  announced_amount: null
  paid: "none"
  paid_note: "No compensation reporting was frozen in the source set."
  source: null

timeline:
  - date: 2026-06-23
    type: "red"
    event: "Google News RSS surfaced India Today's headline reporting that an out-of-control car ploughed into vehicles and a food stall in Ahmedabad, leaving one person dead."
    source: "https://news.google.com/rss/search?q=%22Video%3A%20Out-of-control%20car%20ploughs%20into%20vehicles%2C%20food%20stall%20in%20Ahmedabad%3B%201%20dead%22&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
---

## Evidence map

- `title` → The exact-title Google News RSS item reads `Video: Out-of-control car ploughs into vehicles, food stall in Ahmedabad; 1 dead - India Today`.
- `date` → The RSS `pubDate` for that item is `Tue, 23 Jun 2026 02:01:22 GMT`, which normalizes to `2026-06-23`.
- `location` → The exact-title RSS item names Ahmedabad.
- `deaths` → The exact-title RSS item says `1 dead`.
- `injured` → The frozen source set does not provide a verified injury count, so this remains null.
- `status` → The frozen source set contains no named accused, arrests, prosecution, or compensation details, so the record remains `no-action`.
- `accused_count` / `accused` → No named accused are identified in the frozen source set.
- `compensation` → The frozen source set does not mention compensation.
- `summary` → Supported by the exact-title Google News RSS item and the corresponding Google News article wrapper.

## Frozen source notes

- The queue-supplied Google News article URL returned HTTP 200 as a Google News wrapper, but the exact-title RSS search feed was the cleanest frozen artifact for the title and publication timestamp.
- A Google News article-wrapper copy was also frozen locally to preserve the queue signal's original link target.
- No exact or near-duplicate case file was found in `content/cases` before drafting this record.

## Conflict notes

- None. The frozen source set is internally consistent on the Ahmedabad location, one-death count, and lack of public accountability details.
