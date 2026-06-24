// Service worker minimal pentru MeteoLocal (aplicația principală).
// Singurul scop: îndeplinește condițiile tehnice pentru instalare completă ca
// aplicație separată pe Android/Chrome. NU face cache offline — datele meteo
// trebuie să fie mereu proaspete, niciodată servite dintr-un cache vechi.

self.addEventListener('install', e=>{
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  e.respondWith(fetch(e.request));
});
