// KORDON site: texts in 12 languages (texts.js), language select, gallery, and the current test build from version.json.
// Look and theme button: the shared PegasoHlib kit (https://pegasohlib.github.io/assets/kit.css, kit.js).
'use strict';

// Screenshots in img/; a missing file is simply not shown.
const SHOTS = [
  { file: 'img/shot-globe.webp', key: 'shotGlobe' },
  { file: 'img/shot-map.webp', key: 'shotMap' },
  { file: 'img/shot-relief.webp', key: 'shotRelief' },
];

// Texts: T in texts.js. The menu lists the languages that have texts, in this order: [key, code, own name].
const LANGS = [
  ['uk', 'UK', 'Українська'], ['en', 'EN', 'English'], ['es', 'ES', 'Español'], ['pt', 'PT', 'Português'],
  ['fr', 'FR', 'Français'], ['de', 'DE', 'Deutsch'], ['it', 'IT', 'Italiano'], ['sv', 'SV', 'Svenska'],
  ['id', 'ID', 'Bahasa Indonesia'], ['ja', 'JA', '日本語'], ['kk', 'KK', 'Қазақша'], ['ru', 'RU', 'Русский'],
].filter(([k]) => T[k]);

const ICONS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  swap: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
  merge: '<path d="M7 4h5l2.5 4.3L12 12.6H7L4.5 8.3z"/><path d="M12 12.6h5l2.5 4.3L17 21.2h-5l-2.5-4.3z"/>',
  mountain: '<path d="m3 19 6-10 4 6 2-3 6 7z"/><path d="m8 11 1 1.5 1.5-1"/>',
  speed: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="m12 16 4-5"/>',
};

let lang = pickLanguage();
let version = null; // version.json once loaded, false if it failed

// ?lang= (the main site and the other pages pass it), the saved choice (own or the main site's), then the browser.
function pickLanguage() {
  const asked = new URLSearchParams(location.search).get('lang');
  if (asked && T[asked]) return asked;
  try {
    const saved = localStorage.getItem('kordon-lang') || localStorage.getItem('siteLang');
    if (saved && T[saved]) return saved;
  } catch (e) { /* storage may be blocked */ }
  for (const l of navigator.languages || [navigator.language || 'en']) {
    const base = String(l).toLowerCase().split('-')[0];
    const k = base === 'in' ? 'id' : base;
    if (T[k]) return k;
  }
  return 'en';
}

function buildLangMenu() {
  document.getElementById('lang').innerHTML = LANGS.map(([k, , name]) =>
    `<option value="${k}" lang="${k}">${name}</option>`).join('');
}

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach((el) => {
    const value = t[el.dataset.t];
    if (typeof value === 'string') el.textContent = value;
  });
  document.getElementById('lang').value = lang;
  document.getElementById('hubLink').href = 'https://pegasohlib.github.io/?lang=' + lang;
  const url = new URL(location.href);
  if (url.searchParams.get('lang') !== lang) { url.searchParams.set('lang', lang); history.replaceState(null, '', url); }

  document.getElementById('nowCards').innerHTML = t.now.map(([icon, title, text]) =>
    `<article class="card"><span class="tile"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[icon]}</svg></span>` +
    `<h3>${title}</h3><p>${text}</p></article>`).join('');
  document.getElementById('planList').innerHTML = t.plan.map((p) => `<li>${p}</li>`).join('');
  document.getElementById('steps').innerHTML = t.steps.map((s) => `<li>${s}</li>`).join('');
  document.querySelectorAll('.gallery figcaption').forEach((cap) => { cap.textContent = t[cap.dataset.key]; });
  renderVersion();
}

function renderVersion() {
  const t = T[lang];
  const meta = document.getElementById('dlMeta');
  const notes = document.getElementById('dlNotes');
  if (version === null) {
    meta.textContent = t.loadingVersion;
    return;
  }
  if (version === false) {
    meta.textContent = t.versionFailed;
    notes.hidden = true;
    return;
  }
  const mb = version.size ? Math.round(version.size / 1048576) : '—';
  meta.textContent = t.versionLine.replace('{v}', version.versionName || '?').replace('{s}', mb);
  const text = version.notes && (version.notes[lang] || version.notes.en || version.notes.uk);
  notes.hidden = !text;
  document.getElementById('dlNotesText').textContent = text || '';
}

function buildGallery() {
  const box = document.getElementById('gallery');
  SHOTS.forEach((shot) => {
    const fig = document.createElement('figure');
    fig.hidden = true;
    const img = new Image();
    img.alt = '';
    img.loading = 'lazy';
    img.onload = () => { fig.hidden = false; box.hidden = false; };
    img.onerror = () => fig.remove();
    img.src = shot.file;
    const cap = document.createElement('figcaption');
    cap.dataset.key = shot.key;
    cap.textContent = T[lang][shot.key];
    fig.append(img, cap);
    box.append(fig);
  });
}

async function loadVersion() {
  try {
    const response = await fetch('version.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(response.status);
    version = await response.json();
    if (version.apk) {
      document.getElementById('dlButton').href = version.apk;
      document.getElementById('heroDownload').href = version.apk;
    }
  } catch (e) {
    version = false;
  }
  renderVersion();
}

document.getElementById('lang').addEventListener('change', (e) => {
  if (!T[e.target.value]) return;
  lang = e.target.value;
  try { localStorage.setItem('kordon-lang', lang); localStorage.setItem('siteLang', lang); } catch (e2) { /* ignore */ }
  render();
});

buildLangMenu();
buildGallery();
render();
loadVersion();
