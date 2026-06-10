---
title: "Jaipur IOC Depot Fire"
date: 2009-10-29
location: "Sitapura Industrial Area, Jaipur, Rajasthan"
category: "fire"
status: "under-trial"
deaths: null
injured: null
accused_count: null
accused_gap: "The frozen sources report an FIR against 20 accused and later arrests of 9 senior IOC officials, but this draft does not reconcile the full accountability roster or final legal outcome."
summary: "A fire at the Indian Oil Corporation depot in Sitapura Industrial Area, Jaipur, on 29 October 2009 caused a major explosion, widespread damage, and a long legal and compensation trail. The frozen sources conflict on casualty totals and compensation figures, so this record keeps deaths and injuries null while noting the later arrests of IOC officials."
tags: ["fire", "jaipur", "rajasthan", "ioc", "sitapura", "industrial-disaster"]
last_updated: 2026-06-10

accused: []

compensation:
  announced: true
  announced_amount: ""
  paid: "partial"
  paid_note: "The frozen sources report compensation announcements and payments, but the amounts conflict across reports, so the final payout figure is not reconciled here."
  source: "https://www.indiatoday.in/india/story/12-dead-over-200-injured-in-indian-oil-depot-fire-in-jaipur-59623-2009-10-28"

timeline:
  - date: 2009-10-29
    type: "red"
    event: "India Today reported that a massive fire erupted at Indian Oil's fuel depot in Sitapura industrial area, killing 12 people and injuring over 200."
    source: "https://www.indiatoday.in/india/story/12-dead-over-200-injured-in-indian-oil-depot-fire-in-jaipur-59623-2009-10-28"
    source_name: "India Today"
  - date: 2009-10-29
    type: "gray"
    event: "Wikipedia identifies the incident as the Jaipur oil depot fire at the IOC depot in Sitapura and states that it killed 12 people and injured over 300."
    source: "https://en.wikipedia.org/wiki/2009_Jaipur_fire"
    source_name: "Wikipedia"
  - date: 2009-10-29
    type: "gray"
    event: "The IChemE paper on the IOC terminal in Jaipur describes the event as a vapour cloud explosion after a gasoline leak and says it caused eleven fatalities, six on the IOC site and five offsite."
    source: "https://www.icheme.org/media/9070/xxiii-paper-74.pdf"
    source_name: "IChemE / GL Noble Denton"
  - date: 2010-07-02
    type: "amber"
    event: "Wikipedia says police arrested 9 senior IOC officials, including the Rajasthan general manager Gautam Bose, on charges of criminal negligence."
    source: "https://en.wikipedia.org/wiki/2009_Jaipur_fire"
    source_name: "Wikipedia"
  - date: 2009-10-29
    type: "blue"
    event: "India Today reported that Chief Minister Ashok Gehlot announced compensation of Rs two lakh for the families of the dead and Rs 50,000 for those seriously injured, and said the government would bear the cost of treatment of the injured."
    source: "https://www.indiatoday.in/india/story/12-dead-over-200-injured-in-indian-oil-depot-fire-in-jaipur-59623-2009-10-28"
    source_name: "India Today"
---

## Evidence map

- `title` → India Today and Wikipedia both identify the incident as the Jaipur oil depot / IOC depot fire.
- `date` → India Today and Wikipedia both place the fire on 29 October 2009.
- `location` → India Today says the depot was in Sitapura industrial area; Wikipedia places it in Sitapura Industrial Area, Jaipur, Rajasthan.
- `category` → The event is an industrial fire / explosion, so `fire` fits the repository taxonomy.
- `deaths` → left `null` because the frozen sources conflict: India Today says 12, Wikipedia says 12 but later notes 11 by 31 October, and IChemE says 11 fatalities.
- `injured` → left `null` because the frozen sources conflict: India Today says over 200, Wikipedia says over 300, and the IChemE paper does not give a stable injury count in the excerpt used here.
- `accused_count` / `accused` → left conservative because the frozen sources mention an FIR against 20 accused and later arrests of 9 officials, but the draft does not reconcile the full roster.
- `status` → `under-trial` because the sources show arrests and an active accountability process but not a clean final resolution.
- `compensation` → India Today reports compensation announcements, but the frozen sources disagree on amounts, so the final payout figure is not normalized here.
- `summary` → supported by the source set as a fire at the IOC depot with a major blast, conflicting casualty reporting, and later legal action.

Notes:
- This is a new case, not a repair of an existing case file.
- Frozen source artifacts are stored under `agent-workflows/case-editorial/references/cases/jaipur-ioc-depot-fire/`.
- The casualty figures are intentionally left null instead of choosing between conflicting reports.
