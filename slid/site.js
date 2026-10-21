// Slid site: icons, the language switcher (shared by every page and carried between them) and the header.

const ICONS = {
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  off: '<path d="M2 2l20 20"/><path d="M8.5 8.5A5 5 0 0 0 12 17a5 5 0 0 0 3.5-1.5"/><path d="M12 7a5 5 0 0 1 5 5"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
  child: '<circle cx="12" cy="5" r="2"/><path d="M9 20l1-6-2-3h8l-2 3 1 6"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  widget: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  devices: '<rect x="2" y="4" width="14" height="11" rx="2"/><rect x="17" y="8" width="5" height="12" rx="1"/><path d="M6 19h6"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
};
const icon = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ""}</svg>`;
const MAIL = '<a href="mailto:pegasohlib12@gmail.com">pegasohlib12@gmail.com</a>';
// The app icon as an image (header and hero).
const LOGO = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="18 18 72 72"><defs><linearGradient id="g" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stop-color="#FF9A5A"/><stop offset="0.55" stop-color="#E8552C"/><stop offset="1" stop-color="#B8322B"/></linearGradient></defs><rect x="0" y="0" width="108" height="108" fill="url(#g)"/><circle cx="41.2" cy="70.6" r="2.6" fill="#fff" fill-opacity="0.8"/><circle cx="49.3" cy="67.4" r="2.9" fill="#fff" fill-opacity="0.88"/><circle cx="57.8" cy="63.2" r="3.2" fill="#fff" fill-opacity="0.94"/><path fill="#fff" fill-rule="evenodd" d="M69,66 C64.5,58.6 57.5,52.4 57.5,43.5 A11.5,11.5 0 1,1 80.5,43.5 C80.5,52.4 73.5,58.6 69,66 Z M69,38.6 A4.9,4.9 0 1,0 69,48.4 A4.9,4.9 0 1,0 69,38.6 Z"/></svg>');

const ORDER = ["en", "uk", "es", "pt", "fr", "de", "it", "sv", "id", "ja", "kk", "ru"];
const NAMES = { en: "English", uk: "Українська", es: "Español", pt: "Português", fr: "Français", de: "Deutsch", it: "Italiano", sv: "Svenska", id: "Bahasa Indonesia", ja: "日本語", kk: "Қазақша", ru: "Русский" };
// The app's name in each script (the brand is written, not translated).
const BRAND = l => (["uk", "ru", "kk"].includes(l) ? "Слід" : l === "ja" ? "スリド" : "Slid");
const KEY = "slid-lang";
// The header links in every language.
const NAV = {
  en: ["Home", "Privacy"], uk: ["Головна", "Конфіденційність"], es: ["Inicio", "Privacidad"], pt: ["Início", "Privacidade"],
  fr: ["Accueil", "Confidentialité"], de: ["Start", "Datenschutz"], it: ["Home", "Privacy"], sv: ["Hem", "Integritet"],
  id: ["Beranda", "Privasi"], ja: ["ホーム", "プライバシー"], kk: ["Басты бет", "Құпиялық"], ru: ["Главная", "Конфиденциальность"],
};

function pickLang(T) {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && T[q]) return q;
  try { const s = localStorage.getItem(KEY) || localStorage.getItem("slid-privacy-lang"); if (s && T[s]) return s; } catch (e) {}
  for (const n of navigator.languages || [navigator.language || "en"]) {
    let c = n.toLowerCase().split("-")[0];
    if (c === "in") c = "id";
    if (T[c]) return c;
  }
  return "en";
}

// The footer link to the hub with all PegasoHlib apps.
const HUB = {
  en: "PegasoHlib — all apps", uk: "PegasoHlib — всі застосунки", es: "PegasoHlib — todas las apps", pt: "PegasoHlib — todos os apps",
  fr: "PegasoHlib — toutes les applis", de: "PegasoHlib — alle Apps", it: "PegasoHlib — tutte le app", sv: "PegasoHlib — alla appar",
  id: "PegasoHlib — semua aplikasi", ja: "PegasoHlib — すべてのアプリ", kk: "PegasoHlib — барлық қосымшалар", ru: "PegasoHlib — все приложения",
};
const CHEV = '<path d="m6 9 6 6 6-6"/>';

/** Draws the header (logo, page links, language menu, theme button) and the footer, and keeps [render] in step with the chosen language. */
function startPage(T, page, render) {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.innerHTML = `<div class="in"><a class="home" href="./"><img src="${LOGO}" alt=""><span id="brand"></span></a>
    <nav class="links"><a id="nav-home" href="./"></a><a id="nav-privacy" href="privacy.html"></a></nav>
    <label class="lang">${icon("globe")}<select id="lang" aria-label="Language"></select><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true">${CHEV}</svg></label>
    <button class="theme" id="theme" type="button"></button></div>`;
  document.body.prepend(bar);
  const foot = document.createElement("footer");
  document.getElementById("page").after(foot);
  const sel = bar.querySelector("#lang");
  for (const l of ORDER.filter(l => T[l])) {
    const o = document.createElement("option");
    o.value = l;
    o.textContent = NAMES[l];
    sel.appendChild(o);
  }
  const up = document.createElement("a");
  up.className = "top";
  up.href = "#";
  up.innerHTML = icon("up");
  up.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); history.replaceState(null, "", location.pathname + location.search); });
  document.body.appendChild(up);
  addEventListener("scroll", () => up.classList.toggle("show", scrollY > 600), { passive: true });

  function show(l) {
    const t = T[l];
    document.documentElement.lang = l;
    sel.value = l;
    bar.querySelector("#brand").textContent = BRAND(l);
    const home = bar.querySelector("#nav-home");
    const priv = bar.querySelector("#nav-privacy");
    home.textContent = NAV[l][0];
    priv.textContent = NAV[l][1];
    // Links carry the language to the other page.
    home.href = `./?lang=${l}`;
    priv.href = `privacy.html?lang=${l}`;
    bar.querySelector(".home").href = `./?lang=${l}`;
    home.classList.toggle("on", page === "home");
    priv.classList.toggle("on", page === "privacy");
    foot.innerHTML = `<p>${BRAND(l)}${page === "home" ? ` · <a href="privacy.html?lang=${l}">${NAV[l][1]}</a>` : ""} · ${MAIL}</p>` +
      `<p><a href="https://pegasohlib.github.io/?lang=${l}">${HUB[l]}</a></p>`;
    render(l, t, BRAND(l));
  }
  sel.addEventListener("change", () => {
    try { localStorage.setItem(KEY, sel.value); } catch (e) {}
    const u = new URL(location.href);
    u.searchParams.set("lang", sel.value);
    history.replaceState(null, "", u);
    show(sel.value);
  });
  show(pickLang(T));
}
