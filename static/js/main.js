(function () {
  'use strict';

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
