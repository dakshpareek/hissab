---
title: "Lucknow Coaching Centre Fire"
date: 2026-06-22
location: "Aliganj, Lucknow, Uttar Pradesh"
category: "fire"
status: "under-trial"
deaths: 15
injured: null
accused_count: 4
accused_gap: "The frozen source set reports four arrests but does not name the accused."
summary: >-
  Google News follow-up coverage says the UP government suspended four officials in connection with the Lucknow fire incident and that four accused were arrested after the blaze killed 15 in Aliganj. The earlier Google News coverage that surfaced an 18-death count remains a conflict note in the case record, and the frozen source set still does not identify the accused by name.
tags: ["uttar-pradesh", "lucknow", "aliganj", "coaching-centre", "fire", "fatality", "arrest", "suspension", "investigation"]
last_updated: 2026-06-30

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
    event: "Google News RSS surfaced the News On AIR headline '15 killed in fire at coaching centre in Lucknow’s Aliganj area - News On AIR'."
    source: "https://news.google.com/rss/search?q=%2215+killed+in+fire+at+coaching+centre+in+Lucknow%E2%80%99s+Aliganj+area%22&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-22
    type: "gray"
    event: "A related Google News RSS result from Telangana Today said NHRC demanded an action report from the DM and police commissioner over 18 deaths in the Lucknow coaching centre fire."
    source: "https://news.google.com/rss/search?q=Lucknow+coaching+centre+fire+Aliganj&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-23
    type: "amber"
    event: "Google News exact-title RSS for the Lucknow fire follow-up says the UP government suspended four officials in connection with the incident and that four accused were arrested."
    source: "https://news.google.com/rss/search?q=%22Lucknow+fire+incident%3A+Police+register+case+against+six%2C+arrest+four%3B+Four+officials+suspended%22&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-23
    type: "amber"
    event: "A related Google News RSS result from WION says four government officials were suspended and four building owners were arrested after the blaze killed 15 in Aliganj."
    source: "https://news.google.com/rss/search?q=Lucknow+coaching+centre+fire+police+register+case+against+six+arrest+four+four+officials+suspended&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
---

## Evidence map

- `title` → The Google News RSS item title is `15 killed in fire at coaching centre in Lucknow’s Aliganj area - News On AIR`.
- `date` → The RSS `pubDate` is `Mon, 22 Jun 2026 16:51:00 GMT`, which normalizes to 2026-06-22.
- `location` → The RSS item title says `in Lucknow’s Aliganj area`.
- `deaths` → The RSS item title says `15 killed`.
- `summary` → Supported by the News On AIR follow-up title and the related Google News result from WION reporting the same incident cluster.
- `status` → The follow-up RSS titles report arrests and suspensions, so the record moves from `no-action` to `under-trial`.
- `accused_count` → The frozen source set reports four arrests.
- `accused_gap` → The frozen source set does not name the accused.
- `injured` → The frozen source titles do not provide a reliable injured count.
- `compensation` → No compensation reporting was frozen in the source set.

## Frozen source notes

- The case remains the same Lucknow coaching-centre fire record already present in `content/cases`.
- The frozen source set for this run includes the Google News exact-title RSS search feed, the related Google News RSS search feed, and the Google News article wrapper for the News On AIR follow-up.
- The related RSS result still conflicts on the death count (`18`) relative to the News On AIR item (`15`).
- Direct publisher pages were not used in this run.

## Conflict notes

- The related Google News result from Telangana Today says NHRC demanded an action report over `18 deaths`; the case keeps `15` deaths from the News On AIR item and flags the count conflict.
- The source set does not provide a precise injured count, so `injured` remains null.
