(function () {
  const cards = Array.from(document.querySelectorAll("[data-case-card]"));
  const resultCount = document.querySelector("[data-result-count]");
  const emptyState = document.querySelector("[data-no-results]");
  const searchInput = document.querySelector("[data-filter-input]");
  const chipButtons = Array.from(document.querySelectorAll("[data-filter-chip]"));

  if (!cards.length) {
    return;
  }

  const initialUrl = new URL(window.location.href);
  const state = {
    query: (initialUrl.searchParams.get("q") || "").trim().toLowerCase(),
    category: (initialUrl.searchParams.get("category") || "all").trim().toLowerCase()
  };

  if (searchInput) {
    searchInput.value = state.query;
  }

  const setActiveChip = () => {
    chipButtons.forEach((button) => {
      const value = (button.getAttribute("data-filter-chip") || "all").toLowerCase();
      button.classList.toggle("is-active", value === state.category);
      button.setAttribute("aria-pressed", String(value === state.category));
    });
  };

  const syncUrl = () => {
    const next = new URL(window.location.href);

    if (state.query) next.searchParams.set("q", state.query);
    else next.searchParams.delete("q");

    if (state.category && state.category !== "all") next.searchParams.set("category", state.category);
    else next.searchParams.delete("category");

    history.replaceState({}, "", `${next.pathname}${next.search}${next.hash}`);
  };

  const applyFilters = () => {
    let visible = 0;

    cards.forEach((card) => {
      const text = (card.getAttribute("data-case-text") || "").toLowerCase();
      const category = (card.getAttribute("data-case-category") || "all").toLowerCase();

      const matches =
        (!state.query || text.includes(state.query)) &&
        (state.category === "all" || category === state.category);

      card.hidden = !matches;

      if (matches) {
        visible += 1;
      }
    });

    if (resultCount) {
      resultCount.textContent = String(visible);
    }

    if (emptyState) {
      emptyState.hidden = visible !== 0;
    }

    setActiveChip();
    syncUrl();
  };

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  chipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.category = (button.getAttribute("data-filter-chip") || "all").toLowerCase();
      applyFilters();
    });
  });

  applyFilters();
})();
