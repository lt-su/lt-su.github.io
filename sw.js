importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1777fa8d8acc8c215885.js",
    "revision": "e5c32342a7d76944bb39109f053e9a5c"
  },
  {
    "url": "/_nuxt/186f2ed55ab84e1a3bf5.js",
    "revision": "ccd926ef18d985c2e24bff1e5544ce74"
  },
  {
    "url": "/_nuxt/2bee06178cec4de7b975.js",
    "revision": "c4f3201eb5e8f54fa37f62679a8ba1f5"
  },
  {
    "url": "/_nuxt/4b274ad1090cecb10dab.js",
    "revision": "ce10f2cf3efaa2b6744d5ec071597ef1"
  },
  {
    "url": "/_nuxt/c2535bd4b23ac3406e3c.js",
    "revision": "8255cc9c096b42f397a8116ccfa30a2d"
  },
  {
    "url": "/_nuxt/c2e0ecb2411efed8abc1.js",
    "revision": "d17dfc0c9329f1518dea7d97b3f32de4"
  },
  {
    "url": "/_nuxt/e664ba328e79a8102acc.js",
    "revision": "c6f537c55712b16e1612de5e8d6b5fbc"
  },
  {
    "url": "/_nuxt/f494803ee6a9f3eefc03.js",
    "revision": "147cccb9a301b4ae364efecdb506883a"
  }
], {
  "cacheId": "lt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
