---
title: "Thoothukudi Cracker Unit Blast"
date: 2026-06-20
location: "Ayanrajapatti village, Thoothukudi district, Tamil Nadu"
category: "other"
status: "no-action"
deaths: 1
injured: null
accused_count: null
accused_gap: "No accused, arrests, or prosecution details were identified in the frozen source set."
summary: >-
  The Hindu reported that a woman worker died and around 22 others were injured in an explosion at a firecracker manufacturing unit in Ayanrajapatti village under Masarpatti police jurisdiction in Thoothukudi on 20 June 2026. The article said the deceased was Mariammal, 48, that police and fire tenders rushed to the site, and that Masarpatti police registered a case and continued investigating.
tags: ["thoothukudi", "tamil-nadu", "firecracker-unit", "explosion", "industrial-accident", "fatality"]
last_updated: 2026-06-26
accused: []
compensation:
  announced: false
  announced_amount: ""
  paid: "none"
  paid_note: "No compensation reporting was frozen for this draft."
  source: ""
timeline:
  - date: 2026-06-20
    type: "red"
    event: "The Hindu reported that a woman worker died in an explosion at a firecracker manufacturing unit at Ayanrajapatti village under Masarpatti police jurisdiction in Thoothukudi."
    source: "https://www.thehindu.com/news/cities/Madurai/woman-worker-killed-in-firecracker-unit-explosion/article71126840.ece"
    source_name: "The Hindu"
  - date: 2026-06-20
    type: "amber"
    event: "The article said the deceased was Mariammal, 48, from Nathathupatti in Virudhunagar district, and that around 22 workers were injured and taken to government hospital in Sattur."
    source: "https://www.thehindu.com/news/cities/Madurai/woman-worker-killed-in-firecracker-unit-explosion/article71126840.ece"
    source_name: "The Hindu"
  - date: 2026-06-20
    type: "gray"
    event: "The Hindu said Masarpatti police rushed to the site, deployed fire tenders from Vilathikulam, Kovilpatti and Sattur, registered a case, and continued investigations."
    source: "https://www.thehindu.com/news/cities/Madurai/woman-worker-killed-in-firecracker-unit-explosion/article71126840.ece"
    source_name: "The Hindu"
---

## Evidence map

- `title` → The article headline is "Woman worker killed in firecracker unit explosion".
- `date` → The article page shows `publish-date` and `article:published_time` as `2026-06-20T21:58:40+05:30`.
- `location` → The body says the explosion occurred "at a firecracker manufacturing unit at Ayanrajapatti village under Masarpatti police jurisdiction".
- `deaths` → The body says "A woman worker was killed" and identifies the deceased, Mariammal, 48.
- `injured` → The body says "around 22 workers were injured" and all were admitted to government hospital in Sattur, but the earlier New Indian Express report on the same incident gives a different injury count, so this field remains null.
- `status` → The article says police registered a case and further investigations were underway, but no accused or arrests were identified.
- `summary` → Supported by the headline, the casualty paragraph, and the police-response paragraph.

## Frozen source notes

- The source is a direct The Hindu article, not a homepage or search result.
- Repo search found an existing Thoothukudi firecracker-unit case file, so this run was treated as a near-duplicate repair rather than a new case.
- The older New Indian Express report on the same incident used a different injury count, so the maintained injured field is left null and the discrepancy is documented below.

## Conflict notes

- The earlier New Indian Express report on the same incident said "A total of 28 workers were reported injured, of whom 11 suffered severe injuries", while The Hindu reports "around 22 workers were injured". I left `injured` as null to avoid choosing between conflicting counts.
- The deceased's age differs across reports: The Hindu identifies Mariammal as 48, while the earlier report said 50. The age detail is kept only in the narrative summary and not as a schema field.
