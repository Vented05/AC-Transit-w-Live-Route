const C='bt-v13',F=['./','index.html','manifest.webmanifest','icons/icon-180.png','icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
 if(u.origin===location.origin)e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
