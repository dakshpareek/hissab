(function () {
  'use strict';

  // ── FILTER + SEARCH ──────────────────────────────────────────────
  var cards = Array.from(document.querySelectorAll('.case-card'));
  var chips = Array.from(document.querySelectorAll('.chip'));
  var searchInput = document.getElementById('search-input');
  var noResults = document.getElementById('no-results');

  if (!cards.length) return;

  var activeFilter = 'all';
  var searchQuery = '';

  function applyFilters() {
    var visible = 0;

    cards.forEach(function (card) {
      var status   = card.dataset.status || '';
      var category = card.dataset.category || '';
      var title    = card.dataset.title || '';
      var location = card.dataset.location || '';
      var tagsRaw  = card.dataset.tags || '[]';
      var tags     = [];
      try { tags = JSON.parse(tagsRaw); } catch (e) {}

      // Filter match
      var filterMatch = activeFilter === 'all';
      if (!filterMatch) {
        filterMatch =
          status === activeFilter ||
          category === activeFilter ||
          tags.indexOf(activeFilter) > -1;
      }

      // Search match
      var searchMatch = true;
      if (searchQuery.length > 1) {
        searchMatch =
          title.indexOf(searchQuery) > -1 ||
          location.indexOf(searchQuery) > -1 ||
          category.indexOf(searchQuery) > -1;
      }

      var show = filterMatch && searchMatch;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    if (noResults) noResults.classList.toggle('hidden', visible > 0);
  }

  // Chip clicks
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeFilter = chip.dataset.filter || 'all';
      applyFilters();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // ── COPY LINK FEEDBACK ───────────────────────────────────────────
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
