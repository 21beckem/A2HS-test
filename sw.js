self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'https://21beckem.github.io/A2HS-test/',
      'https://21beckem.github.io/A2HS-test/index.html',
      'https://21beckem.github.io/A2HS-test/index.js',
      'https://21beckem.github.io/A2HS-test/style.css',
      'https://21beckem.github.io/A2HS-test/images/fox1.jpg',
      'https://21beckem.github.io/A2HS-test/images/fox2.jpg',
      'https://21beckem.github.io/A2HS-test/images/fox3.jpg',
      'https://21beckem.github.io/A2HS-test/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
