(function () {
  'use strict';

  var cards = Array.from(document.querySelectorAll('[data-case-card]'));
  var resultCount = document.querySelector('[data-result-count]');
  var emptyState = document.querySelector('[data-no-results]');
  var searchInput = document.querySelector('[data-filter-input]');
  var chipButtons = Array.from(document.querySelectorAll('[data-filter-chip]'));

  if (cards.length) {
    var initialUrl = new URL(window.location.href);
    var initialStatus = (initialUrl.searchParams.get('status') || '').trim().toLowerCase();
    var initialCategory = (initialUrl.searchParams.get('category') || '').trim().toLowerCase();
    var initialFilterKind = 'all';
    var initialFilterValue = 'all';

    if (initialStatus) {
      initialFilterKind = 'status';
      initialFilterValue = initialStatus;
    } else if (initialCategory) {
      initialFilterKind = 'category';
      initialFilterValue = initialCategory;
    }

    var state = {
      query: (initialUrl.searchParams.get('q') || '').trim().toLowerCase(),
      filterKind: initialFilterKind,
      filterValue: initialFilterValue
    };

    if (searchInput) {
      searchInput.value = state.query;
    }

    var setActiveChip = function () {
      chipButtons.forEach(function (button) {
        var kind = (button.getAttribute('data-filter-chip-kind') || 'category').toLowerCase();
        var value = (button.getAttribute('data-filter-chip') || 'all').toLowerCase();
        var active = state.filterKind === kind && state.filterValue === value;

        if (value === 'all' && kind === 'all') {
          active = state.filterKind === 'all';
        }

        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
    };

    var syncUrl = function () {
      var next = new URL(window.location.href);

      if (state.query) {
        next.searchParams.set('q', state.query);
      } else {
        next.searchParams.delete('q');
      }

      if (state.filterKind === 'status') {
        next.searchParams.set('status', state.filterValue);
        next.searchParams.delete('category');
      } else if (state.filterKind === 'category') {
        next.searchParams.set('category', state.filterValue);
        next.searchParams.delete('status');
      } else {
        next.searchParams.delete('status');
        next.searchParams.delete('category');
      }

      history.replaceState({}, '', next.pathname + next.search + next.hash);
    };

    var applyFilters = function () {
      var visible = 0;

      cards.forEach(function (card) {
        var text = (card.getAttribute('data-case-text') || '').toLowerCase();
        var category = (card.getAttribute('data-case-category') || '').toLowerCase();
        var status = (card.getAttribute('data-case-status') || '').toLowerCase();

        var matchesQuery = !state.query || text.indexOf(state.query) !== -1;
        var matchesFilter = true;

        if (state.filterKind === 'status') {
          matchesFilter = status === state.filterValue;
        } else if (state.filterKind === 'category') {
          matchesFilter = category === state.filterValue;
        }

        var matches = matchesQuery && matchesFilter;
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
      searchInput.addEventListener('input', function () {
        state.query = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }

    chipButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var kind = (button.getAttribute('data-filter-chip-kind') || 'category').toLowerCase();
        var value = (button.getAttribute('data-filter-chip') || 'all').toLowerCase();

        if (kind === 'all' || value === 'all') {
          state.filterKind = 'all';
          state.filterValue = 'all';
        } else {
          state.filterKind = kind;
          state.filterValue = value;
        }

        applyFilters();
      });
    });

    applyFilters();
  }

  window.copyLink = function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
      var btns = document.querySelectorAll('.btn-share');
      btns.forEach(function (b) {
        if (b.textContent.trim().indexOf('Copy') > -1) {
          var orig = b.innerHTML;
          b.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
          setTimeout(function () { b.innerHTML = orig; }, 2000);
        }
      });
    }).catch(function () {
      prompt('Copy this link:', window.location.href);
    });
  };
})();
