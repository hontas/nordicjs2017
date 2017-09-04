const CACHE_NAME = 'slides-v1';

self.addEventListener('install', (event) => {
  event.waitUntil((async function aiife() {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      '/nordicjs2017/',
      '/nordicjs2017/index.html',
      '/nordicjs2017/remark.min.js'
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
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith((async function aiife() {
      const cache = await caches.open(CACHE_NAME);
      const response = await cache.match(event.request);
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });

      return response || fetchPromise;
    }()));
  }
});
