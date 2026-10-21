// PegasoHlib site kit: the theme button (Auto → Light → Dark), shared by every app page on pegasohlib.github.io.
// Put <button class="theme" id="theme" type="button"></button> in the header and load this file with `defer`.
// To avoid a flash, each page's <head> also runs:
//   <script>try{var t=localStorage.getItem("pegasohlib-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}</script>
(function () {
  var KEY = "pegasohlib-theme";
  var ORDER = ["auto", "light", "dark"];
  var ICON = {
    auto: '<path d="M12 3a9 9 0 1 0 0 18z" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="9"/>',
    light: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    dark: '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>',
  };
  // "Theme: …" in the 12 languages of the sites.
  var WORDS = {
    en: ["Theme", "Auto", "Light", "Dark"], uk: ["Тема", "Авто", "Світла", "Темна"], es: ["Tema", "Auto", "Claro", "Oscuro"],
    pt: ["Tema", "Auto", "Claro", "Escuro"], fr: ["Thème", "Auto", "Clair", "Sombre"], de: ["Design", "Auto", "Hell", "Dunkel"],
    it: ["Tema", "Auto", "Chiaro", "Scuro"], sv: ["Tema", "Auto", "Ljust", "Mörkt"], id: ["Tema", "Otomatis", "Terang", "Gelap"],
    ja: ["テーマ", "自動", "ライト", "ダーク"], kk: ["Тақырып", "Авто", "Ашық", "Қараңғы"], ru: ["Тема", "Авто", "Светлая", "Тёмная"],
  };
  // ?theme=light|dark in the address wins (for links and checks), then the saved choice.
  var forced = new URLSearchParams(location.search).get("theme");
  function get() {
    if (ORDER.indexOf(forced) >= 0) return forced;
    try { var t = localStorage.getItem(KEY); return ORDER.indexOf(t) >= 0 ? t : "auto"; } catch (e) { return "auto"; }
  }
  function apply(t) {
    var root = document.documentElement;
    if (t === "auto") delete root.dataset.theme; else root.dataset.theme = t;
    var dark = t === "dark" || (t === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#0D0F14" : "#ECEEF3";
    var btn = document.getElementById("theme");
    if (btn) {
      var w = WORDS[(root.lang || "en").split("-")[0]] || WORDS.en;
      var label = w[0] + ": " + w[ORDER.indexOf(t) + 1];
      btn.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + ICON[t] + "</svg>";
      btn.title = label;
      btn.setAttribute("aria-label", label);
    }
  }
  function init() {
    var btn = document.getElementById("theme");
    apply(get());
    if (btn) btn.addEventListener("click", function () {
      var next = ORDER[(ORDER.indexOf(get()) + 1) % ORDER.length];
      forced = null;
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
    // Labels follow a language switch on the page.
    new MutationObserver(function () { apply(get()); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { apply(get()); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
