

const CACHE_NAME = 'nordicJS-v1';

self.addEventListener('install', (event) => {
  event.waitUntil((async function aiife() {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      '/',
      '/index.html',
      '/remark.min.js',
      '/media/bamse.png',
      '/media/skalman.png',
      'https://fonts.googleapis.com/css?...',
    ]);
    self.skipWaiting();
  }()));
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil((async function iife() {
    const cacheNames = await caches.keys();
    const cachesToDelete = cacheNames
      .filter((cacheName) => !cacheWhitelist.includes(cacheName))
      .map((cacheName) => caches.delete(cacheName));
    await Promise.all(cachesToDelete);
    self.clients.claim();
  }()));
});

self.addEventListener('fetch', (event) => {
  event.respondWith((async function aiife() {
    const cache = await caches.open(CACHE_NAME);
    const response = await cache.match(event.request);

    return response || fetch(event.request);
  }()));
});
