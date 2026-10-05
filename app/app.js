// Pages behind the LUNO email buttons, for phones WITHOUT the app (with the app installed, the
// link opens the app directly via Android App Links / iOS Universal Links and this page never loads).
// Phones go straight to their store; a computer sees both store links.
(function () {
  var PLAY = "https://play.google.com/store/apps/details?id=com.lunomj.driver";
  var APPLE = "https://apps.apple.com/app/luno-mwanajando/id6782275114";
  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);
  var isApple = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  document.getElementById("play").href = PLAY;
  document.getElementById("apple").href = APPLE;
  if (isAndroid) { document.getElementById("apple").style.display = "none"; window.location.replace(PLAY); }
  else if (isApple) { document.getElementById("play").style.display = "none"; window.location.replace(APPLE); }
})();
