// PegasoHlib site kit: the theme button, shared by every page on pegasohlib.github.io.
// The first visit follows the phone (light or dark); one tap switches light ↔ dark and the choice is kept for all the sites.
// Put <button class="theme" id="theme" type="button"></button> in the header and load this file with `defer`.
// To avoid a flash, each page's <head> also runs:
//   <script>try{var t=localStorage.getItem("pegasohlib-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}</script>
(function () {
  var KEY = "pegasohlib-theme";
  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var MOON = '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>';
  // What a tap does, in the 12 languages of the sites: [to light, to dark].
  var WORDS = {
    en: ["Light theme", "Dark theme"], uk: ["Світла тема", "Темна тема"], es: ["Tema claro", "Tema oscuro"],
    pt: ["Tema claro", "Tema escuro"], fr: ["Thème clair", "Thème sombre"], de: ["Helles Design", "Dunkles Design"],
    it: ["Tema chiaro", "Tema scuro"], sv: ["Ljust tema", "Mörkt tema"], id: ["Tema terang", "Tema gelap"],
    ja: ["ライトテーマ", "ダークテーマ"], kk: ["Ашық тақырып", "Қараңғы тақырып"], ru: ["Светлая тема", "Тёмная тема"],
  };
  var phoneDark = matchMedia("(prefers-color-scheme: dark)");
  // ?theme=light|dark in the address wins (for links and checks), then the saved choice, then the phone.
  var forced = new URLSearchParams(location.search).get("theme");
  function current() {
    if (forced === "light" || forced === "dark") return forced;
    try { var t = localStorage.getItem(KEY); if (t === "light" || t === "dark") return t; } catch (e) {}
    return phoneDark.matches ? "dark" : "light";
  }
  function apply() {
    var t = current(), root = document.documentElement;
    root.dataset.theme = t;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === "dark" ? "#0D0F14" : "#ECEEF3";
    var btn = document.getElementById("theme");
    if (btn) {
      // The button shows where a tap leads: the sun in the dark theme, the moon in the light one.
      var w = WORDS[(root.lang || "en").split("-")[0]] || WORDS.en;
      var label = t === "dark" ? w[0] : w[1];
      btn.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (t === "dark" ? SUN : MOON) + "</svg>";
      btn.title = label;
      btn.setAttribute("aria-label", label);
    }
  }
  function init() {
    apply();
    var btn = document.getElementById("theme");
    if (btn) btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      function flip() {
        forced = null;
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply();
        var ic = btn.querySelector(".ic"); if (ic) ic.classList.add("spin");
      }
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return flip();
      // The new theme spreads from the button as a growing circle; browsers without view transitions fade the colours instead.
      if (document.startViewTransition) {
        var r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
        var end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        document.startViewTransition(flip).ready.then(function () {
          document.documentElement.animate({ clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + end + "px at " + x + "px " + y + "px)"] },
            { duration: 550, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" });
        }).catch(function () {});
      } else {
        var root = document.documentElement;
        root.classList.add("theme-fade");
        flip();
        setTimeout(function () { root.classList.remove("theme-fade"); }, 450);
      }
    });
    // Labels follow a language switch on the page; the phone's mode counts until a choice is made.
    new MutationObserver(apply).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    phoneDark.addEventListener("change", apply);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
