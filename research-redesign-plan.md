# Research Search/Filter Redesign Plan

**Goal:** Unify the home and archive search/filter UI so it uses one shared component, one shared data model, and one shared JavaScript controller without drifting from the site’s existing card and chip styling.

**Architecture:**
- Replace the page-local search/filter markup with the shared `search-filter` partial.
- Render the shared `case-card` partial on both the home page and the cases archive so the filter script reads consistent `data-*` attributes.
- Keep all spacing, borders, focus states, and active-chip styling in CSS; keep JavaScript limited to state, URL sync, and visibility toggling.

**Tech Stack:** Hugo templates, vanilla JavaScript, site-wide CSS.

---

## Task 1: Align the home page with shared search/filter components

**Objective:** Replace the custom home-page search and chip markup with the shared partials.

**Files:**
- Modify: `layouts/index.html`
- Modify: `layouts/partials/search-filter.html` only if the home page needs a small prop tweak
- Modify: `layouts/partials/case-card.html` only if card data attributes need to be adjusted

**Step 1: Remove the inline search row and hard-coded filter chips.**

**Step 2: Render `partial "search-filter.html"` with the home page case collection.**

**Step 3: Render `partial "case-card.html"` inside the home page case list loop.**

**Step 4: Verify the home page still shows the hero, counts, search bar, chips, and case list in the same visual hierarchy.**

---

## Task 2: Align the archive page with the same component contract

**Objective:** Make `/cases/` use the exact same search/filter behavior and card markup as the home page.

**Files:**
- Modify: `layouts/cases/list.html`

**Step 1: Replace the old archive-specific chip row and search bar with the shared search/filter partial.**

**Step 2: Render the shared case cards rather than ad hoc anchor markup.**

**Step 3: Keep the archive page spacing inside the existing page wrapper so the page still feels like the same site.**

**Step 4: Verify the archive page filters and search results behave exactly like the home page.**

---

## Task 3: Consolidate the client-side filtering logic into the shared script

**Objective:** Ensure one JavaScript controller handles search, chips, result counts, and URL sync without depending on old page-specific selectors.

**Files:**
- Modify: `static/js/main.js`
- Optionally remove or ignore: `static/js/site.js` if it becomes redundant

**Step 1: Update the script to query the shared `data-case-card`, `data-filter-input`, `data-filter-chip`, and `data-result-count` hooks.**

**Step 2: Keep the search matching logic limited to text filtering, category filtering, active-chip state, and `history.replaceState`.**

**Step 3: Preserve the existing copy-link behavior on detail pages.**

**Step 4: Verify search input, chip clicks, and direct URL loads all produce the same visible state.**

---

## Task 4: Verify styling stays in sync with the rest of the UI

**Objective:** Confirm the redesign uses the shared CSS tokens and no page-specific inline layout rules remain for the search block.

**Files:**
- Modify: `static/css/site.css` only if a small gap exists in the shared filter component styling
- Inspect: `layouts/index.html`, `layouts/cases/list.html`

**Step 1: Prefer existing shared classes such as `filter-bar`, `filter-bar--panel`, `filter-search`, `chip-row`, and `chip`.**

**Step 2: Remove inline spacing/positioning from the search area when the shared component already covers it.**

**Step 3: Verify the focus ring, active chip, and panel surface styles match the rest of the site cards.**

**Step 4: Run a build and a live browser check on the home page and `/cases/`.**

---

## Verification checklist

- Home page search filters cards without breaking layout.
- Archive page uses the same shared component and looks visually consistent.
- Search state stays in the URL.
- No page-specific inline styles control search positioning.
- Card markup and filter data attributes come from one shared source.
