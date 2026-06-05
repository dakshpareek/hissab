---
title: "Air India Flight 171 Crash"
date: 2025-06-12
location: "Ahmedabad, Gujarat, India"
category: "other"
status: "no-action"
deaths: 260
injured: 1
accused_count: 0
accused_gap: "No accused named in the frozen sources."
summary: "Air India Flight 171, a Boeing 787-8 operating from Ahmedabad to Gatwick, crashed shortly after takeoff on 12 June 2025. The AAIB preliminary report says the flight carried 230 passengers, 10 cabin crew, and 2 flight crew, while Reuters' graphics coverage says the crash killed 241 people on board and 19 on the ground, with one passenger surviving."
tags: ["air-india", "ahmedabad", "gujarat", "aviation", "plane-crash"]
last_updated: 2026-06-05

accused: []

compensation:
  announced: false
  announced_amount: ""
  paid: "none"
  paid_note: "No compensation figure was frozen for this draft."
  source: ""

timeline:
  - date: 2025-06-12
    type: "red"
    event: "The AAIB preliminary report says Air India's B787-8 VT-ANB was operating Flight AI171 from Ahmedabad to Gatwick and crashed at about 0809 UTC immediately after take-off. The report lists 230 passengers, 10 cabin crew, and 2 flight crew on board."
    source: "https://www.aaib.gov.in/What%27s%20New%20Assets/Preliminary%20Report%20VT-ANB.pdf"
    source_name: "AAIB preliminary report"
  - date: 2025-06-12
    type: "red"
    event: "The AAIB injuries table records 12 crew fatalities, 229 passenger fatalities, and 19 other fatalities, with one passenger listed as seriously injured."
    source: "https://www.aaib.gov.in/What%27s%20New%20Assets/Preliminary%20Report%20VT-ANB.pdf"
    source_name: "AAIB preliminary report"
  - date: 2025-06-12
    type: "gray"
    event: "Reuters' illustrated timeline says the crash near Ahmedabad airport killed 241 people on board and 19 on the ground, and that just one passenger survived."
    source: "https://www.reuters.com/graphics/INDIA-CRASH/TIMELINE/xmvjelqwlpr/"
    source_name: "Reuters"
---

This is a new case record rather than a repair of an existing file. I froze the AAIB preliminary report as the primary source for the aircraft, flight, location, and casualty table, then used Reuters' illustrated timeline as the independent public anchor for the same incident.

The file stays conservative:
- no accused are named in the frozen sources, so `accused_count` stays at 0 and `accused` remains empty
- `injured` is set to 1 because the AAIB table records one serious passenger injury
- `deaths` is set to 260 from the AAIB total fatality table

Notes:
- AAIB source text froze the incident identity, flight number, location, and fatality/injury table.
- Reuters source text froze the same crash identity plus the on-board / ground casualty summary and lone survivor detail.
