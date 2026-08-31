var C='sz-v1';
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){
if(e.request.method!=='GET')return;
e.respondWith(caches.open(C).then(function(c){
return fetch(e.request).then(function(r){try{c.put(e.request,r.clone());}catch(x){}return r;})
.catch(function(){return c.match(e.request).then(function(m){return m||c.match('./index.html');});});
}));});