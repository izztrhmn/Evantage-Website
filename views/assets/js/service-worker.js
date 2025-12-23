self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    event.waitUntil(
      caches.open('my-pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/images/icons/icon-192x192.png',
          '/images/icons/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Return cached version
        }
        return fetch(event.request); // Fallback to network if not in cache
      })
    );
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
  });
  