if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered successfully!');
      })
      .catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  }
  
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('offline-cache').then(function(cache) {
        return cache.addAll([
          '/path/to/offline-page.html', // Замените на путь к вашей offline-странице
          '/path/to/offline-image.jpg', // Замените на пути к вашим offline-ресурсам
          // Добавьте другие ресурсы, которые вам нужны в offline-режиме
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });