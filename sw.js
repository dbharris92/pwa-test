/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bright.json",
    "revision": "36424b5386fc5597bb8c722992beac96"
  },
  {
    "url": "geojson/states.geojson",
    "revision": "8ec14844f3b39324ba4e381a947a53d9"
  },
  {
    "url": "img/trails.ico",
    "revision": "1b85a7a6a09d923cfc961e93a84be4e4"
  },
  {
    "url": "img/trails.png",
    "revision": "c768f6fbd13e7e41e6ca3e52a62a2788"
  },
  {
    "url": "img/trails192.png",
    "revision": "c8d1e2706b1337dfbb6b6bdff8a2a333"
  },
  {
    "url": "img/trails512.png",
    "revision": "af3ff659bb1690edd8fcbca63a02c17b"
  },
  {
    "url": "index.html",
    "revision": "b39dc7475e4acb92732104f14bc80af5"
  },
  {
    "url": "manifest.json",
    "revision": "3c15830e6f19125cc7a6d27bea4efaea"
  },
  {
    "url": "mapboxgl.css",
    "revision": "7cc1e6125e83776334068445de06f97d"
  },
  {
    "url": "mapboxgl.js",
    "revision": "f1ffa26ca664d5aac675856791bffd66"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
