const CACHE = 'match-live-shell-v1';
const FILES = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest'];
self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE).then(cache => cache.addAll(FILES))
));
self.addEventListener('activate', event => event.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
));
self.addEventListener('fetch', event => {
  if (event.request.method === 'GET') event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
