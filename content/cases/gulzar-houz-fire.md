---
title: "Gulzar Houz Fire"
date: 2025-05-18
location: "Gulzar Houz, Hyderabad, Telangana, India"
category: "fire"
status: "no-action"
deaths: 17
injured: null
accused_count: 0
accused_gap: "No public accused named in the frozen sources; the CM ordered a probe, but the frozen text does not name a chargesheeted or arrested accused."
summary: "A fire at a centuries-old G+2 building in Gulzar Houz near Charminar, Hyderabad killed 17 people, including eight children, and injured several more. Frozen reporting says the fire spread rapidly through wooden interiors and a narrow exit, and that the state announced ex gratia while ordering a probe into the incident."
tags: ["fire", "hyderabad", "telangana", "gulzar-houz", "charminar", "old-city"]
last_updated: 2026-06-06

accused: []

compensation:
  announced: true
  announced_amount: ""
  paid: "none"
  paid_note: "Wikipedia says ex gratia payments were announced, but the frozen sources do not state a final payout status or amount."
  source: "https://en.wikipedia.org/wiki/2025_Gulzar_Houz_fire"

timeline:
  - date: 2025-05-18
    type: "red"
    event: "A fire breaks out in a building at Gulzar Houz near Charminar in Hyderabad. Frozen reporting says 17 people were killed, including eight children, and several others were injured."
    source: "https://en.wikipedia.org/wiki/2025_Gulzar_Houz_fire"
    source_name: "Wikipedia"
  - date: 2025-05-18
    type: "red"
    event: "NewsMeter reports that seventeen people died and more than 20 were injured near Charminar, and says the building was about 125 years old with one entrance and one staircase less than 1 metre wide."
    source: "https://newsmeter.in/top-stories/the-meter-box-was-closed-in-the-wood-panel-how-fire-killed-17-from-a-family-in-hyderabads-gulzar-house-748635"
    source_name: "NewsMeter"
  - date: 2025-05-18
    type: "blue"
    event: "The Hindu reports that Chief Minister Revanth Reddy ordered a thorough probe into the Gulzar Houz fire and said the fire personnel rescued about 50 people from the house."
    source: "https://www.thehindu.com/news/cities/Hyderabad/hyderabad-gulzar-houz-fire-accident-cm-revanth-reddy-orders-probe-into-fire-accident-commends-fire-personnel/article69591321.ece"
    source_name: "The Hindu"
---

## Evidence map

- `title` → The incident is publicly identified as the Gulzar Houz fire; Wikipedia titles the article "2025 Gulzar Houz fire".
- `date` → Wikipedia gives the date as 18 May 2025.
- `location` → Wikipedia gives the location as "Gulzar Houz, Hyderabad, Telangana, India".
- `category` → The incident is a building fire / urban fire, so `fire` fits the repository taxonomy.
- `deaths` → Wikipedia explicitly states 17 deaths.
- `injured` → Left `null` because the frozen sources only say "several" / "more than 20" injured rather than a stable exact count.
- `status` → Left as `no-action` because the frozen sources do not name a public accused or chargesheeted defendant; they only mention a probe and committee.
- `accused_count` / `accused` → No public accused named in the frozen sources.
- `compensation` → Wikipedia says ex gratia payments were announced, but the frozen sources do not give a final payout status or amount.
- `summary` → Supported by Wikipedia, NewsMeter, and The Hindu: the casualty count, urban fire setting, and probe / rescue response are all explicit in the frozen text.

## Notes

- Duplicate check found no existing `gulzar-houz` case file in `content/cases`.
- The cause is left out of the summary because the frozen sources conflict between suspected short circuit and compressor-blast explanations.
- Frozen source artifacts are saved under `agent-workflows/case-editorial/references/cases/gulzar-houz-fire/`.
