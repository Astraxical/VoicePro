const CACHE_NAME = 'voicepro-v7';
// Get base path from service worker scope (works for GitHub Pages subpaths)
const BASE_PATH = self.registration.scope.replace(self.location.origin, '').replace(/\/+$/, '') || '';

const ASSETS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/sfx/sfx_thunder_01_close.mp3`,
  `${BASE_PATH}/sfx/sfx_thunder_02_distant.mp3`,
  `${BASE_PATH}/sfx/sfx_thunder_03_rolling.mp3`,
  `${BASE_PATH}/sfx/sfx_thunder_04_heavy.mp3`,
  `${BASE_PATH}/sfx/sfx_thunder_05_storm.mp3`,
  `${BASE_PATH}/sfx/sfx_explosion_01_debris.mp3`,
  `${BASE_PATH}/sfx/sfx_explosion_02_huge.mp3`,
  `${BASE_PATH}/sfx/sfx_explosion_03_blast.mp3`,
  `${BASE_PATH}/sfx/sfx_explosion_04_large.mp3`,
  `${BASE_PATH}/sfx/sfx_explosion_05_crisp.mp3`,
  `${BASE_PATH}/sfx/sfx_battle_01_mg.mp3`,
  `${BASE_PATH}/sfx/sfx_battle_02_debris.mp3`,
  `${BASE_PATH}/sfx/sfx_battle_03_wood.mp3`,
  `${BASE_PATH}/sfx/sfx_battle_04_mg_high.mp3`,
  `${BASE_PATH}/sfx/sfx_battle_05_rapid.mp3`,
  `${BASE_PATH}/sfx/sfx_gun_cz.mp3`,
  `${BASE_PATH}/sfx/sfx_gun_mosin.mp3`,
  `${BASE_PATH}/sfx/sfx_gun_sks.mp3`,
  `${BASE_PATH}/sfx/sfx_gun_shotty.mp3`,
  `${BASE_PATH}/sfx/sfx_gun_auto.mp3`,
  `${BASE_PATH}/sfx/sfx_magic_earth.mp3`,
  `${BASE_PATH}/sfx/sfx_magic_fire.mp3`,
  `${BASE_PATH}/sfx/sfx_magic_wind.mp3`,
  `${BASE_PATH}/sfx/sfx_magic_water.mp3`,
  `${BASE_PATH}/sfx/sfx_magic_ice.mp3`,
  `${BASE_PATH}/sfx/sfx_music_fanfare.mp3`,
  `${BASE_PATH}/sfx/sfx_music_fast_fight.mp3`,
  `${BASE_PATH}/sfx/sfx_music_inspirational.mp3`,
  `${BASE_PATH}/sfx/sfx_music_tadhana.mp3`,
  `${BASE_PATH}/sfx/sfx_music_war.mp3`,
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('Some assets failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      
      return fetch(event.request).then(fetchResponse => {
        // Only cache successful responses
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return fetchResponse;
        }
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      }).catch(() => {
        // Only fallback to index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match(`${BASE_PATH}/index.html`);
        }
        // For other requests (audio, etc.), let the error propagate
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});