const staticAssets = [
  '/nordicjs2017/',
  '/nordicjs2017/index.html',
  '/nordicjs2017/remark.min.js',
  '/nordicjs2017/style.css',
  '/nordicjs2017/media/pontus_gravatar.jpeg',
  '/nordicjs2017/media/js-logo-small.jpeg',
  '/nordicjs2017/media/sw01.png',
  '/nordicjs2017/media/bamse.png',
  '/nordicjs2017/media/farmor.jpg',
  '/nordicjs2017/media/lille-skutt.jpg',
  '/nordicjs2017/media/skalman.png',
  '/nordicjs2017/media/avega.jpg',
  '/nordicjs2017/media/avega-group.png',
  '/nordicjs2017/media/avega-group.png',
  '/nordicjs2017/media/sw-reg.jpg',
  '/nordicjs2017/media/sw-install.jpg',
  '/nordicjs2017/media/sw-activate.jpg',
  '/nordicjs2017/media/sw-fetch.jpg',
  '/nordicjs2017/media/bamsemed honung.png',
  '/nordicjs2017/media/Skalman%20i%20ka%CC%88rran.jpg',
  'https://fonts.googleapis.com/css?family=Droid+Serif',
  'https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz',
  'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic',
  'https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic',
];
const CACHE_NAME = `nordicJS-${createHash(staticAssets)}`;

self.addEventListener('install', (event) => {
  event.waitUntil((async function aiife() {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(staticAssets);
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
    const fetchPromise = fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse.ok) {
          cache.put(event.request, networkResponse.clone());
          console.log('updated resource for', event.request.url);
        }
        return networkResponse;
      });

    return response || fetchPromise;
  }()));
});

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
function createHash(array) {
  return array.join('').split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
