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
            'index.html',
            '../pwa/meta.html',
            '../pwa/service-worker.js',
            '../pwa/manifest.json',
            '../scripts/schedule.js',
            '../fonts/SFProRoundedRegular.woff2',
            '../css/styles.css',
            '../icons/favicon.png',
            '../icons/Icon-maskable-192.png',
            '../icons/Icon-maskable-512.png',
            '../icons/monochrome-192.png',
            '../icons/monochrome-512.png',
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