---
title: "Lucknow Coaching Centre Fire"
date: 2026-06-22
location: "Aliganj, Lucknow, Uttar Pradesh"
category: "fire"
status: "no-action"
deaths: 15
injured: null
accused_count: null
accused_gap: "No named accused, arrests, or prosecution details were identified in the frozen source set."
summary: >-
  Google News RSS surfaced a News On AIR item reporting 15 deaths in a fire at a coaching centre in Lucknow’s Aliganj area on 22 June 2026. A related Google News result from Telangana Today said NHRC demanded an action report from the DM and police commissioner over 18 deaths, so the case keeps the News On AIR fatality count and flags the count conflict. The frozen source set does not identify any named accused, arrests, or prosecution details.
tags: ["uttar-pradesh", "lucknow", "aliganj", "coaching-centre", "fire", "fatality"]
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
    event: "Google News RSS surfaced the News On AIR headline '15 killed in fire at coaching centre in Lucknow’s Aliganj area - News On AIR'."
    source: "https://news.google.com/rss/search?q=%2215+killed+in+fire+at+coaching+centre+in+Lucknow%E2%80%99s+Aliganj+area%22&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-22
    type: "gray"
    event: "A related Google News RSS result from Telangana Today said NHRC demanded an action report from the DM and police commissioner over 18 deaths in the Lucknow coaching centre fire."
    source: "https://news.google.com/rss/search?q=Lucknow+coaching+centre+fire+Aliganj&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
---

## Evidence map

- `title` → The Google News RSS item title is `15 killed in fire at coaching centre in Lucknow’s Aliganj area - News On AIR`.
- `date` → The RSS `pubDate` is `Mon, 22 Jun 2026 16:51:00 GMT`, which normalizes to 2026-06-22.
- `location` → The RSS item title says `in Lucknow’s Aliganj area`.
- `deaths` → The RSS item title says `15 killed`.
- `summary` → Supported by the RSS item title and the related Google News result that mentions `18 deaths`.
- `status` → No named accused, arrests, prosecution details, or other accountability action were identified in the frozen source set, so `no-action` fits.
- `accused_count` → No named accused, arrests, or prosecution details were identified in the frozen source set.
- `injured` → The frozen source titles do not provide a reliable injured count.
- `compensation` → No compensation reporting was frozen in the source set.

## Frozen source notes

- The case was selected as a new record; repo search did not find an existing Lucknow coaching-centre fire case file.
- The frozen source set consists of the Google News exact-title RSS search feed, a related Google News RSS search feed, and the Google News article wrapper for the News On AIR item.
- The related RSS result conflicts on the death count (`18`) relative to the News On AIR item (`15`).
- Direct publisher pages were not used in this run.

## Conflict notes

- The related Google News result from Telangana Today says NHRC demanded an action report over `18 deaths`; the case keeps `15` deaths from the News On AIR item and flags the count conflict.
- The source set does not provide a precise injured count, so `injured` remains null.
