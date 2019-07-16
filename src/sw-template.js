import importScripts from 'workbox-build';
// let workbox: any | undefined;
if ('function' === typeof importScripts) {
  // getModuleURL
  importScripts(
    'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    workbox.loadModule('workbox-strategies');
    workbox.loadModule('workbox-precaching');
    workbox.loadModule('workbox-routing');
    workbox.loadModule('workbox-expiration');
    workbox.loadModule('workbox-core');

    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    // workbox.routing.registerNavigationRoute ('/', {
    //   blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/],
    // });

    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
      })
    );

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    workbox.core.skipWaiting();
    workbox.core.clientsClaim();
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
