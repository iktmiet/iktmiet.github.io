if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker зарегистрирован!');
      })
      .catch(function(error) {
        console.log('[!] Ошибка при задании Service Worker: ', error);
      });
  }
  
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('offline-cache').then(function(cache) {
        return cache.addAll([
            'index.html'
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