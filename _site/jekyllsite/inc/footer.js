(function() {
  var se = document.createElement('script');
  se.type = 'text/javascript';
  se.async = true;
  se.src = '//storage.googleapis.com/code.snapengage.com/js/61f00017-a5e4-4c24-8dd7-4600f0db94c2.js';
  var done = false;
  se.onload = se.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
      done = true;
      /* Place your SnapEngage JS API code below */
      /* SnapEngage.allowChatSound(true); Example JS API: Enable sounds for Visitors. */

      SnapEngage.openProactiveChat(true, true, "Helloooooo!");

    }
  };
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(se, s);
})();