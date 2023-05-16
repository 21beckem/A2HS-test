self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/A2HS-test/',
      '/A2HS-test/index.html',
      '/A2HS-test/index.js',
      '/A2HS-test/style.css',
      '/A2HS-test/images/fox1.jpg',
      '/A2HS-test/images/fox2.jpg',
      '/A2HS-test/images/fox3.jpg',
      '/A2HS-test/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
