var CACHE_NAME = "example-cache";

var urlsToCache = [
  "/"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("cache");
      return cache.addAll(urlsToCache);
    })
  );
});
