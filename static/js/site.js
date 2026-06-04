(function () {
  'use strict';

  var cards = Array.from(document.querySelectorAll('[data-case-card]'));
  var resultCount = document.querySelector('[data-result-count]');
  var emptyState = document.querySelector('[data-no-results]');
  var searchInput = document.querySelector('[data-filter-input]');
  var chipButtons = Array.from(document.querySelectorAll('[data-filter-chip]'));

  if (!cards.length) return;

  var initialUrl = new URL(window.location.href);
  var state = {
    query: (initialUrl.searchParams.get('q') || '').trim().toLowerCase(),
    filter: (initialUrl.searchParams.get('filter') || 'all').trim().toLowerCase(),
  };

  if (searchInput) {
    searchInput.value = state.query;
  }

  function setActiveChip() {
    chipButtons.forEach(function (button) {
      var value = (button.getAttribute('data-filter-chip') || 'all').toLowerCase();
      var isActive = value === state.filter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function syncUrl() {
    var next = new URL(window.location.href);

    if (state.query) next.searchParams.set('q', state.query);
    else next.searchParams.delete('q');

    if (state.filter && state.filter !== 'all') next.searchParams.set('filter', state.filter);
    else next.searchParams.delete('filter');

    history.replaceState({}, '', next.pathname + next.search + next.hash);
  }

  function applyFilters() {
    var visible = 0;

    cards.forEach(function (card) {
      var text = (card.getAttribute('data-case-text') || '').toLowerCase();
      var category = (card.getAttribute('data-case-category') || 'all').toLowerCase();
      var status = (card.getAttribute('data-case-status') || '').toLowerCase();

      var matches =
        (!state.query || text.indexOf(state.query) > -1) &&
        (state.filter === 'all' || category === state.filter || status === state.filter);

      card.hidden = !matches;
      if (matches) visible += 1;
    });

    if (resultCount) {
      resultCount.textContent = String(visible);
    }

    if (emptyState) {
      emptyState.hidden = visible !== 0;
    }

    setActiveChip();
    syncUrl();
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      state.query = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  chipButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      state.filter = (button.getAttribute('data-filter-chip') || 'all').toLowerCase();
      applyFilters();
    });
  });

  applyFilters();
})();
