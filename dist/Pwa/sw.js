const dynamicCacheName = 'naxChatApp';
const assets = [
  '/idb.min.js',
  '/quasar-logo.svg',
  '/icons/gmail.jpg',
  '/icons/vue.png',
  '/icons/firebase.png'
];

// install event
self.addEventListener('install', evt => {
  // console.log('service worker installed');
  evt.waitUntil(
    caches.open(dynamicCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  // console.log('service worker activated'); 
  evt.waitUntil(
    caches.keys().then((keys) => {
      // console.log(keys)
      return Promise.all(keys
        .filter(key => key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  )
});

const isCache = (evt) => {
  // console.log(evt.url.indexOf('FotosSend') !== -1 && evt.destination === 'image');

  if (evt.url.indexOf('FotosSend') !== -1 && evt.destination === 'image') {
    return false
  }

  if (evt.url.indexOf('/images/cleardot.gif') !== -1) {
    return false
  }

  return evt.url.indexOf('firestore.googleapis.com') === -1
}

// fetch event
self.addEventListener('fetch', evt => {
  if (isCache(evt.request)) {
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            // limitCacheSize(dynamicCacheName, 15);
            return fetchRes;
          })
        });
      }).catch(err => {
        // console.info(err);
      })
    );
  }
});


self.addEventListener('error', err => {
  // console.log(err);
})

// const assets = [
//   '/'
// ];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// // install event
// self.addEventListener('install', evt => {
  //console.log('service worker installed');
//   evt.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
      // console.log('caching shell assets');
//       cache.addAll(assets);
//     })
//   );
// });

// activate event
// self.addEventListener('activate', evt => {
  //console.log('service worker activated');
//   evt.waitUntil(
//     caches.keys().then(keys => {
      //console.log(keys);
//       return Promise.all(keys
//         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
//         .map(key => caches.delete(key))
//       );
//     })
//   );
// });

// // fetch events
// self.addEventListener('fetch', evt => {
//   if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
//     evt.respondWith(
//       caches.match(evt.request).then(cacheRes => {
//         return cacheRes || fetch(evt.request).then(fetchRes => {
//           return caches.open(dynamicCacheName).then(cache => {
//             cache.put(evt.request.url, fetchRes.clone());
//             // check cached items size
//             limitCacheSize(dynamicCacheName, 15);
//             return fetchRes;
//           })
//         });
//       }).catch(() => {
//         if(evt.request.url.indexOf('.html') > -1){
//           return caches.match('/pages/fallback.html');
//         } 
//       })
//     );
//   }
// });