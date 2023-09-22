/* eslint-disable no-restricted-globals */

const whitelistedOrigins = ["https://nicolas-vivier.com/"];

// Version du Service Worker
const version = "v1-nicolas-vivier.com";

// Fichiers à mettre en cache
const filesToCache = [
  "/",
  "/assets/image_1.webp",
  "/assets/image_2.webp",
  "/assets/works/Github.webp",
  "/assets/works/kasa.webp",
  "/assets/works/SEO.webp",
];

function isWhitelistedOrigin(request) {
  const origin = request.origin || request.url;
  return whitelistedOrigins.some((url) => origin.startsWith(url));
}

self.addEventListener("install", function (event) {
  console.log(`[${version}] Installing Service Worker`);
  event.waitUntil(
    caches
      .open(version)
      .then(function (cache) {
        return cache.addAll(filesToCache);
      })
      .then(function () {
        console.log(`[${version}] All required resources have been cached`);
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log(`[${version}] Activating Service Worker`);
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
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
      .then(function () {
        console.log(`[${version}] Service Worker has been activated`);
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(version).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request)
            .then(function (networkResponse) {
              if (isWhitelistedOrigin(event.request)) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(function (error) {
              console.error("Fetch failed:", error);
              throw error;
            })
        );
      });
    })
  );
});
