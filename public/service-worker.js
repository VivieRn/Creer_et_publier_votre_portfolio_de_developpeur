/* eslint-disable no-restricted-globals */

const whitelistedOrigins = ["https://nicolas-vivier.com/"];

// Version du Service Worker
const version = "v1.3-nicolas-vivier.com";

// Fichiers à mettre en cache
const filesToCache = [
  "/",
  "/assets/logo-github.webp",
  "/assets/logo-linkedin.webp",
  "/assets/nico-pro-contraste.webp",
  "/assets/works/kasa.webp",
  "/assets/works/SEO.webp",
  "/assets/works/back-end.webp",
  "/assets/Logo-tech-dev/adobe-illustrator.webp",
  "/assets/Logo-tech-dev/adobe-photoshop.webp",
  "/assets/Logo-tech-dev/blender.webp",
  "/assets/Logo-tech-dev/css-3.webp",
  "/assets/Logo-tech-dev/deposer.webp",
  "/assets/Logo-tech-dev/express.webp",
  "/assets/Logo-tech-dev/figma.webp",
  "/assets/Logo-tech-dev/html5.webp",
  "/assets/Logo-tech-dev/js.webp",
  "/assets/Logo-tech-dev/MongoDB.webp",
  "/assets/Logo-tech-dev/nodejs.webp",
  "/assets/Logo-tech-dev/react.webp",
  "/assets/Logo-tech-dev/SEO.webp",
  "/assets/Logo-tech-dev/ThreeJS.webp",
  "/assets/Logo-tech-dev/vercel.webp",
];

function isWhitelistedOrigin(request) {
  const origin = request.origin || new URL(request.url).origin;
  return whitelistedOrigins.includes(origin);
}

self.addEventListener("install", function (event) {
  /*console.log(`[${version}] Installing Service Worker`);*/
  event.waitUntil(
    caches.open(version).then(function (cache) {
      return cache.addAll(filesToCache);
    })
    /*.then(function () {
        console.log(`[${version}] All required resources have been cached`);
      })*/
  );
});

self.addEventListener("activate", function (event) {
  /*console.log(`[${version}] Activating Service Worker`);*/
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key !== version;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
    /*.then(function () {
        console.log(`[${version}] Service Worker has been activated`);
      })*/
  );
});

self.addEventListener("fetch", function (event) {
  if (!isWhitelistedOrigin(event.request)) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.open(version).then(function (cache) {
      return cache.match(event.request).then(function (cachedResponse) {
        var fetchPromise = fetch(event.request)
          .then(function (networkResponse) {
            if (
              !cachedResponse ||
              (networkResponse.headers.get("ETag") &&
                networkResponse.headers.get("ETag") !==
                  cachedResponse.headers.get("ETag"))
            ) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(function (error) {
            console.error("Fetch failed:", error);
            throw error;
          });

        return cachedResponse || fetchPromise;
      });
    })
  );
});
