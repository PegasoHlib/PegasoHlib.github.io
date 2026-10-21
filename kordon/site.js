// KORDON site: texts in two languages, language switch, gallery, and the current test build from version.json.
'use strict';

// Screenshots in img/; a missing file is simply not shown.
const SHOTS = [
  { file: 'img/shot-globe.webp', key: 'shotGlobe' },
  { file: 'img/shot-map.webp', key: 'shotMap' },
  { file: 'img/shot-relief.webp', key: 'shotRelief' },
];

const T = {
  uk: {
    langButton: 'English',
    navNow: 'Що є',
    navPlan: 'Що буде',
    navDownload: 'Завантажити',
    badge: 'Тестова версія для Android',
    tagline: 'Глобальна стратегія на справжній Землі, складеній із шестикутних сот. Грай на глобусі або на плоскій карті, об\'єднуй провінції й перекроюй кордони як хочеш. Попереду — усі епохи, соло й мультиплеєр.',
    downloadApk: 'Завантажити APK',
    howInstall: 'Як встановити',
    requirements: 'Android 10 або новіший · 64-бітний телефон чи планшет (arm64)',
    shotGlobe: 'Глобус',
    shotMap: 'Карта світу',
    shotRelief: 'Рельєф',
    nowTitle: 'Що вже є в тестовій версії',
    nowLead: 'Зараз це рання збірка: карта світу й робота з провінціями. Економіки, війни й дипломатії ще немає.',
    now: [
      ['globe', 'Справжня Земля із сот', 'Увесь світ складено із шестикутників: країни, регіони й берегова лінія за справжніми картами.'],
      ['layers', '5 рівнів деталізації', 'Від звичайної мапи із сотами по 60 км до екстремальної: 1,5 мільйона сот суші, кожна близько 10 км.'],
      ['swap', 'Глобус ↔ карта', 'Одним дотиком глобус плавно розгортається в плоску карту світу й назад.'],
      ['merge', 'Свої провінції', 'Об\'єднуй кілька провінцій одразу, вирізай нову, просто обвівши її пальцем, і скасовуй кроки.'],
      ['mountain', 'Рельєф', 'Кожна сота знає свою висоту й місцевість: рівнина, пагорби, гори чи льодовик. Зверху — тіні гір і глибини морів зі справжніх даних про висоти Землі.'],
      ['speed', 'До 120 кадрів', 'Плавна картинка на швидких екранах; частоту й роздільність можна вибрати.'],
    ],
    planTitle: 'Що буде далі',
    planLead: 'Небагато механік, але кожна зроблена глибоко й пов\'язана з іншими.',
    plan: [
      'Економіка й розвиток провінцій: цінність землі = площа × розвиток',
      'Карта війни й тактичні бої з фігурками, правила яких змінюються з епохою',
      'Дипломатія й переговори',
      'Сильний ШІ з характером, що грає за тими самими правилами',
      'Мультиплеєр і два режими: реальний час або покроковий',
      'Усі епохи й короткі сценарії',
      'Редактор карт і моди',
      'Фінальне випробування епохи, яке треба витримати',
    ],
    downloadTitle: 'Завантажити',
    loadingVersion: 'Дізнаємося версію…',
    versionLine: 'Версія {v} · {s} МБ',
    versionFailed: 'Не вдалося дізнатися версію, але кнопка все одно веде до найновішої збірки.',
    whatsNew: 'Що нового',
    selfUpdate: 'Тестова версія оновлюється сама: на Wi‑Fi завантажує й ставить нову збірку, на мобільних даних показує кнопку.',
    playLater: 'Версія в Google Play з\'явиться пізніше.',
    installTitle: 'Як встановити',
    steps: [
      'Завантаж файл <b>Kordon.apk</b> кнопкою на цій сторінці.',
      'Відкрий його зі сповіщення або з папки «Завантаження».',
      'Якщо Android запитає, дозволь встановлення з цього джерела (браузера чи файлового менеджера) і повернися назад.',
      'Натисни «Встановити». Далі нові версії прийдуть самі.',
    ],
    footer: 'Без реклами й без стеження. Сайт не збирає жодних даних.',
  },
  en: {
    langButton: 'Українська',
    navNow: 'Now',
    navPlan: 'Planned',
    navDownload: 'Download',
    badge: 'Android test build',
    tagline: 'A grand strategy on the real Earth made of hexagonal cells. Play on a globe or a flat world map, merge provinces and redraw borders any way you like. All eras, solo and multiplayer are on the way.',
    downloadApk: 'Download APK',
    howInstall: 'How to install',
    requirements: 'Android 10 or newer · 64-bit phone or tablet (arm64)',
    shotGlobe: 'Globe',
    shotMap: 'World map',
    shotRelief: 'Relief',
    nowTitle: 'In the test build now',
    nowLead: 'This is an early build: the world map and province editing. There is no economy, war or diplomacy yet.',
    now: [
      ['globe', 'The real Earth in cells', 'The whole world is made of hexagons: countries, regions and coastlines follow real maps.'],
      ['layers', '5 detail levels', 'From the normal map with 60 km cells to the extreme one: 1.5 million land cells, each about 10 km across.'],
      ['swap', 'Globe ↔ map', 'One tap smoothly unrolls the globe into a flat world map and back.'],
      ['merge', 'Your own provinces', 'Merge several provinces at once, cut out a new one by drawing its outline, undo any step.'],
      ['mountain', 'Relief', 'Every cell knows its height and terrain: plains, hills, mountains or ice. On top, mountain shading and sea depths from real Earth elevation data.'],
      ['speed', 'Up to 120 FPS', 'Smooth on fast screens; frame rate and resolution are up to you.'],
    ],
    planTitle: 'Planned',
    planLead: 'Few mechanics, each one deep and tied to the others.',
    plan: [
      'Economy and province development: land value = area × development',
      'War map and tactical figurine battles whose rules change with the era',
      'Diplomacy and negotiations',
      'A strong AI with personalities that plays by the same rules',
      'Multiplayer and two modes: real time or turn-based',
      'All eras and short scenarios',
      'Map editor and mods',
      'A final trial of the era to survive',
    ],
    downloadTitle: 'Download',
    loadingVersion: 'Checking the version…',
    versionLine: 'Version {v} · {s} MB',
    versionFailed: 'Could not check the version, but the button still leads to the newest build.',
    whatsNew: 'What\'s new',
    selfUpdate: 'The test build updates itself: on Wi‑Fi it downloads and installs the new build, on mobile data it shows a button.',
    playLater: 'The Google Play version comes later.',
    installTitle: 'How to install',
    steps: [
      'Download <b>Kordon.apk</b> with the button on this page.',
      'Open it from the notification or the Downloads folder.',
      'If Android asks, allow installing from this source (your browser or file manager) and go back.',
      'Tap «Install». New versions will come by themselves after that.',
    ],
    footer: 'No ads and no tracking. This site collects no data.',
  },
};

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

function pickLanguage() {
  const asked = new URLSearchParams(location.search).get('lang');
  if (asked && T[asked]) return asked;
  try {
    const saved = localStorage.getItem('kordon-lang');
    if (saved && T[saved]) return saved;
  } catch (e) { /* storage may be blocked */ }
  const browser = (navigator.languages || [navigator.language || 'en']).map((l) => String(l).toLowerCase());
  return browser.some((l) => l.startsWith('uk') || l.startsWith('ru')) ? 'uk' : 'en';
}

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach((el) => {
    const value = t[el.dataset.t];
    if (typeof value === 'string') el.textContent = value;
  });
  document.getElementById('lang').textContent = t.langButton;

  document.getElementById('nowCards').innerHTML = t.now.map(([icon, title, text]) =>
    `<article class="card"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[icon]}</svg>` +
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

document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'uk' ? 'en' : 'uk';
  try { localStorage.setItem('kordon-lang', lang); } catch (e) { /* ignore */ }
  render();
});

buildGallery();
render();
loadVersion();
