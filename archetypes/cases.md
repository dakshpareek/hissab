---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
location: "City, State"
category: "bridge-collapse"   # bridge-collapse | fire | hoarding | infrastructure | building-collapse | flood | other
status: "no-action"           # no-action | under-trial | partial-justice | closed
deaths: 0
injured: 0
accused_count: 0
accused_gap: "X officials named — 0 chargesheeted"
summary: "One paragraph summary of what happened and the key accountability gap."
tags: []
last_updated: {{ .Date }}

accused:
  - name: "Full name or description"
    role: "Their role in the incident"
    type: "govt"        # govt | private
    status: "not-chargesheeted"  # arrested | on-bail | chargesheeted | convicted | not-chargesheeted | absconding

compensation:
  announced: false
  announced_amount: ""
  paid: "none"          # none | partial | full
  paid_note: ""
  source: ""

timeline:
  - date: {{ .Date }}
    type: "red"         # red (incident) | amber (arrest/legal) | blue (court/official) | green (resolution) | gray (update)
    event: "Describe the event clearly and factually."
    source: "https://..."
    source_name: "Publication name"
---

Additional notes and context about the case in markdown. Keep factual and sourced.
