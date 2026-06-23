---
title: "Shahdol Coal Mine Roof Collapse"
date: 2026-06-06
location: "Shahdol district, Madhya Pradesh"
category: "other"
status: "no-action"
deaths: 2
injured: null
accused_count: null
accused_gap: "No named accused or arrests were identified in the frozen headline set."
summary: "Google News RSS search results surfaced The Hindu, Deccan Herald, and Hindustan Times headlines describing a roof collapse at an underground coal mine in Shahdol, Madhya Pradesh. The headlines agree that two workers died, but they conflict on the number injured (four versus seven), so the injuries field remains null and the case remains at a headline-level record."
tags: ["shahdol", "madhya-pradesh", "coal-mine", "roof-collapse", "mining-accident", "fatality"]
last_updated: 2026-06-23

accused: []

compensation:
  announced: false
  announced_amount: ""
  paid: "none"
  paid_note: "No compensation reporting was frozen for this draft."
  source: ""

timeline:
  - date: 2026-06-06
    type: "red"
    event: "Google News RSS search results surfaced The Hindu headline: 'Two killed, four injured in roof collapse at underground coal mine in Madhya Pradesh’s Shahdol'."
    source: "https://news.google.com/rss/search?q=Shahdol+coal+mine+roof+collapse&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-05
    type: "gray"
    event: "Google News RSS search results surfaced the Deccan Herald headline: '2 dead, 4 injured in roof collapse incident at underground coal mine in Madhya Pradesh's Shahdol'."
    source: "https://news.google.com/rss/search?q=Shahdol+coal+mine+roof+collapse&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
  - date: 2026-06-06
    type: "gray"
    event: "Google News RSS search results also surfaced the Hindustan Times headline: 'Coal mine cave-in kills two workers, injures seven in MP’s Shahdol', creating a conflict on the injured total."
    source: "https://news.google.com/rss/search?q=Shahdol+coal+mine+roof+collapse&hl=en-IN&gl=IN&ceid=IN:en"
    source_name: "Google News RSS"
---

Evidence notes:
- Google News RSS search feed title: "Shahdol coal mine roof collapse" - Google News
- Exact-title Google News RSS search feed title: "\"Two killed, four injured in roof collapse at underground coal mine in Madhya Pradesh’s Shahdol\" - Google News"
- The Google News search feed surfaced three relevant 2026 headlines: The Hindu (two killed, four injured), Deccan Herald (2 dead, 4 injured), and Hindustan Times (two workers killed, seven injured).
- The search feed also surfaced a separate 2016 Hindustan Times coal-mine collapse item; it is not used for this case because the 2026 items already identify the current incident.

Frozen source notes:
- `agent-workflows/case-editorial/references/cases/shahdol-coal-mine-roof-collapse/2026-06-23-shahdol-coal-mine-roof-collapse-google-news-rss-search.xml`
- `agent-workflows/case-editorial/references/cases/shahdol-coal-mine-roof-collapse/2026-06-23-shahdol-coal-mine-roof-collapse-exact-title-search.xml`
- The direct Google News article URL from the queue signal returned HTTP 400 in this environment, so the RSS search feeds were used as the fallback freeze artifacts.

Conflict notes:
- The frozen headline set agrees on two fatalities but conflicts on injuries (four versus seven), so `injured` remains null.
- No named accused, arrests, or compensation reporting were identified in the frozen headline set.
- Unsupported accountability and compensation fields remain null/empty rather than inferred.
