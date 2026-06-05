(function () {
  var cards = Array.from(document.querySelectorAll("[data-case-card]"));
  var chipButtons = Array.from(document.querySelectorAll("[data-filter-chip]"));
  var searchInput = document.querySelector("[data-filter-input]");
  var emptyState = document.querySelector("[data-no-results]");

  if (cards.length) {
    var initialUrl = new URL(window.location.href);
    var state = {
      query: (initialUrl.searchParams.get("q") || "").trim().toLowerCase(),
      category: (initialUrl.searchParams.get("category") || "all").trim().toLowerCase()
    };

    if (searchInput) searchInput.value = state.query;

    function setActiveChip() {
      chipButtons.forEach(function (button) {
        var value = (button.getAttribute("data-filter-chip") || "all").toLowerCase();
        button.classList.toggle("active", value === state.category);
      });
    }

    function syncUrl() {
      var next = new URL(window.location.href);
      if (state.query) next.searchParams.set("q", state.query);
      else next.searchParams.delete("q");
      if (state.category && state.category !== "all") next.searchParams.set("category", state.category);
      else next.searchParams.delete("category");
      history.replaceState({}, "", next.pathname + next.search + next.hash);
    }

    function applyFilters() {
      var visible = 0;
      cards.forEach(function (card) {
        var text = (card.getAttribute("data-case-text") || "").toLowerCase();
        var status = (card.getAttribute("data-case-status") || "").toLowerCase();
        var category = (card.getAttribute("data-case-category") || "").toLowerCase();

        var matches =
          (!state.query || text.includes(state.query)) &&
          (state.category === "all" || status === state.category || category === state.category);

        card.classList.toggle("hidden", !matches);
        if (matches) visible++;
      });

      if (emptyState) emptyState.classList.toggle("hidden", visible !== 0);
      setActiveChip();
      syncUrl();
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.query = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }

    chipButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.category = (button.getAttribute("data-filter-chip") || "all").toLowerCase();
        applyFilters();
      });
    });

    applyFilters();
  }

  window.copyLink = function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
      var btns = document.querySelectorAll(".btn-share");
      btns.forEach(function (b) {
        if (b.textContent.trim().indexOf("Copy") > -1) {
          var orig = b.innerHTML;
          b.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
          setTimeout(function () { b.innerHTML = orig; }, 2000);
        }
      });
    }).catch(function () {
      prompt("Copy this link:", window.location.href);
    });
  };
})();
