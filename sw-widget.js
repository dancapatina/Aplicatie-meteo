// Service worker minimal pentru MeteoLocal Widget.
// Singurul scop: îndeplinește condițiile tehnice pentru "Add to Home Screen" /
// instalare ca aplicație separată (icon propriu, fereastră proprie, fără bara
// browserului). NU face cache offline — widget-ul are nevoie mereu de date live.

self.addEventListener('install', e=>{
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  self.clients.claim();
});

// Trece toate cererile direct către rețea (fără cache) — datele meteo trebuie
// să fie mereu proaspete, niciodată servite dintr-un cache vechi.
self.addEventListener('fetch', e=>{
  e.respondWith(fetch(e.request));
});
