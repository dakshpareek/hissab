# Hissab

**India's accountability gap, documented.**

Hissab tracks what happens after the headlines fade — who was arrested, who was charged, who escaped, and what victims received.

Every entry is sourced from court orders, RTI responses, or named news outlets. We publish facts, not opinions.

---

## Setup

### 1. Clone and install Hugo

```bash
git clone https://github.com/dakshpareek/hissab.git
cd hissab
```

Install Hugo Extended (v0.120+): https://gohugo.io/installation/

On this machine, the Hugo binary is installed here:

```text
C:\Users\rdpuser\AppData\Local\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe
```

If Hugo is not on `PATH`, use the full path directly:

```powershell
& "C:\Users\rdpuser\AppData\Local\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe" server -D
```

### 2. Run locally

```bash
hugo server -D
```

Open http://localhost:1313 in your browser.

### 3. Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` handles everything on every push to `main`

Update `baseURL` in `hugo.toml` to your actual GitHub Pages URL:
```toml
baseURL = "https://hissab.daksh.be/"
```

---

## Adding a new case

```bash
hugo new content cases/your-case-name.md
```

This creates a file in `content/cases/` with the full template pre-filled.

Edit the YAML frontmatter:

```yaml
---
title: "Case Name"
date: 2024-05-13              # Date of the incident
location: "City, State"
category: "fire"              # bridge-collapse | fire | hoarding | infrastructure | building-collapse | other
status: "no-action"           # no-action | under-trial | partial-justice | closed
deaths: 16
injured: 74
accused_count: 3
accused_gap: "BMC officer suspended, 0 arrested"
summary: "One paragraph: what happened and the key accountability gap."
tags: ["fire", "maharashtra", "bmc"]
last_updated: 2025-06-01

accused:
  - name: "Person name"
    role: "Their role"
    type: "govt"              # govt | private
    status: "not-chargesheeted"

compensation:
  announced: true
  announced_amount: "₹5L per death"
  paid: "partial"
  paid_note: "Families report delays"

timeline:
  - date: 2024-05-13
    type: "red"               # red | amber | blue | green | gray
    event: "What happened."
    source: "https://..."
    source_name: "Indian Express"
---

Any additional notes in markdown here.
```

Commit and push → GitHub Actions builds and deploys automatically.

---

## Updating an existing case

Open the relevant file in `content/cases/`, add a new entry to the `timeline` array, update `status` if it changed, and update `last_updated`. Commit and push.

```yaml
timeline:
  # ... existing entries ...
  - date: 2025-06-01
    type: "gray"
    event: "Trial update: next hearing July 2025."
    source: "https://livelaw.in/..."
    source_name: "Live Law"
```

---

## Timeline dot colors

| Color | Use for |
|-------|---------|
| `red` | The incident itself |
| `amber` | Arrests, bail, FIR |
| `blue` | Court orders, official actions |
| `green` | Convictions, compensation paid |
| `gray` | General updates, monitoring |

---

## Status values

| Status | Meaning |
|--------|---------|
| `no-action` | No meaningful legal action against officials |
| `under-trial` | Trial in progress |
| `partial-justice` | Some accountability, gaps remain |
| `closed` | Case concluded (conviction or acquittal) |

---

## Suggesting a case

Open a GitHub issue: https://github.com/dakshpareek/hissab/issues/new

Include:
- Case name and date
- Location
- What happened (brief)
- Source link (required — we don't publish without a source)

---

## Editorial principles

1. **Source everything.** Every timeline entry needs a URL to a court order, RTI response, or named publication. No source = not published.
2. **Don't assert guilt, document process.** "Named in chargesheet" not "responsible for deaths."
3. **No original allegations.** We compile the public record, we don't investigate.
4. **Update when things change.** A case that quietly gets dropped is exactly what we're here to notice.

---

## License

Data: Public domain. Derived from public records.  
Code: MIT.
