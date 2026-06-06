---
title: "Hathras Crowd Crush"
date: 2024-07-02
location: "Pulrai village, Hathras district, Uttar Pradesh"
category: "other"
status: "under-trial"
deaths: 121
injured: null
accused_count: 6
accused_gap: "Police said six people were arrested from the organising group; only Devprakash Madhukar is named explicitly in the frozen reports."
summary: "A crowd crush at a satsang in Pulrai village, Hathras district, Uttar Pradesh killed at least 121 people. Public reporting blamed massive overcrowding, insufficient exits, and the rush toward Bhole Baba's vehicle as he was leaving; police registered a case against organisers and arrested six people, including the main organiser Devprakash Madhukar."
tags: ["hathras", "uttar-pradesh", "crowd-crush", "stampede", "satsang"]
last_updated: 2026-06-05

accused:
  - name: "Devprakash Madhukar"
    role: "Main organiser of the event"
    type: "private"
    status: "arrested"
  - name: "Unnamed other organisers"
    role: "Other members of the organising group arrested by police"
    type: "private"
    status: "arrested"

compensation:
  announced: false
  announced_amount: ""
  paid: "none"
  paid_note: "No compensation figure was frozen from the selected reports."
  source: ""

timeline:
  - date: 2024-07-02
    type: "red"
    event: "A crowd crush broke out at the end of a satsang in Pulrai village, Hathras district, Uttar Pradesh. AP said the event was held in a large tent and that authorities believed massive overcrowding, insufficient exits, bad weather, and other factors may have contributed; BBC said the venue had permission for 80,000 but around 250,000 people attended."
    source: "https://apnews.com/article/india-hathras-stampede-cd902854cbc673cbfbd3408963c34792"
    source_name: "AP News"
  - date: 2024-07-02
    type: "gray"
    event: "BBC reported that the incident took place during a satsang in Hathras district, that the number of people present was three times the permitted limit, and that most of those who died or were injured were women."
    source: "https://www.bbc.com/news/articles/cyr7kjvme44o"
    source_name: "BBC News"
  - date: 2024-07-08
    type: "amber"
    event: "BBC reported that police had arrested six people who were part of the organising group and that Devprakash Madhukar, the main organiser, had been arrested in Delhi and handed over to Uttar Pradesh police; the lawyer for Bhole Baba later said Madhukar had surrendered."
    source: "https://www.bbc.com/news/articles/c725dxwdx19o"
    source_name: "BBC News"
---

The frozen reports are consistent on the core identity: a 2 July 2024 crowd crush at a satsang in Pulrai village, Hathras district, Uttar Pradesh. I used the public-record title "Hathras Crowd Crush" because the sources consistently use Hathras + crush/stampede language, and the event is not a duplicate of any existing case file in this repo.

I left `injured` as `null` because the frozen sources do not give a clean, stable injured count. AP says "injured scores," which is too vague for a numeric field.

Evidence map:
- `title` / identity: BBC title "Hathras: What we know about crush that killed 121 in Uttar Pradesh"; AP title and body describe the same Hathras stampede.
- `date` / `location`: BBC says the incident took place during a satsang in Hathras district; AP says the event was held in a village in Hathras district, Uttar Pradesh.
- `deaths`: AP says the stampede "killed at least 121 people"; BBC says "crush that killed 121."
- `accused_count` / accountability: BBC says police arrested six people from the organising group and later arrested Devprakash Madhukar, the main organiser.
- `summary`: AP says massive overcrowding, insufficient exits, bad weather, and other factors may have contributed; BBC says permission was for 80,000 while around 250,000 attended.

Frozen sources:
- BBC News: `references/cases/hathras-crowd-crush/bbc-crush-know.txt` sha256 `ab21ba5efb194ff8acef2d2c880448bec2f0bd77122385179368c8b7ab6abda8`
- BBC News: `references/cases/hathras-crowd-crush/bbc-organiser.txt` sha256 `ad672eb012684714e761dbed37ceacad85109032386ff78e41032930b250fc96`
- AP News: `references/cases/hathras-crowd-crush/ap-overview.txt` sha256 `4cb7b13e21f4b22b05443d399b6eb0669ce2190234a1f192fd18bbb408fb41a3`
