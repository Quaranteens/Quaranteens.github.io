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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-df5334aa325f6c9cc4ae.js"
  },
  {
    "url": "framework-a272a84775ae56a7ce05.js"
  },
  {
    "url": "app-fe28ff561e652c8a47c5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "92b1eb4cf074d587becea4a4c31a3f97"
  },
  {
    "url": "google-fonts/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2",
    "revision": "d15ba972040b09041a17f6a751282dcb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e00da1ea3e7fe3ae77e6.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "61f402d46c4b4e394b13da24635065fe"
  },
  {
    "url": "styles.cdbefcf032504d410e50.css"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js"
  },
  {
    "url": "1bfc9850-aede54f535e63efb202f.js"
  },
  {
    "url": "b6b1b999d46b12a733ebc699858eab91ef2e633a-0d803d7cf59b6abea6cb.js"
  },
  {
    "url": "component---src-pages-404-js-a70d3319481d40aa4551.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "component---src-pages-about-js-2b43b67d32c831b5b864.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3ddd5d51b095997b4d473ef99898912f"
  },
  {
    "url": "component---src-pages-academy-js-eaa1e6c39e0b0d1402ce.js"
  },
  {
    "url": "page-data/academy/page-data.json",
    "revision": "802b9b1abc5174a4ec4aaa21c09bb364"
  },
  {
    "url": "f311af33234ddd28e9d0bb1b79eb4fb4693f6c2e-219cf9d5a66c9729d69d.js"
  },
  {
    "url": "component---src-pages-academy-schedule-js-4341f573c4c667dcf475.js"
  },
  {
    "url": "page-data/academy-schedule/page-data.json",
    "revision": "d06096e7e686dba29a2955848de8200d"
  },
  {
    "url": "component---src-pages-academygrad-js-042efb18d5fd567ef53e.js"
  },
  {
    "url": "page-data/academygrad/page-data.json",
    "revision": "da10be4f1e14c69912c783c38c22539c"
  },
  {
    "url": "component---src-pages-courses-js-3ccc61ea17b18cfb9ed9.js"
  },
  {
    "url": "page-data/courses/page-data.json",
    "revision": "4c55b0a37587ffa7dc418322d0e7972d"
  },
  {
    "url": "component---src-pages-index-js-e31065d819a2b0d41155.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1fb79e6fc14d98f88dd9e5819fe647f5"
  },
  {
    "url": "component---src-pages-instructions-js-cb484cf4997ac66f7dd7.js"
  },
  {
    "url": "page-data/instructions/page-data.json",
    "revision": "98639e9a908cbbbcfc140ae5b57c32a5"
  },
  {
    "url": "component---src-pages-livestream-js-5e29112268fa42956de4.js"
  },
  {
    "url": "page-data/livestream/page-data.json",
    "revision": "01027a9290b2df11ac2b79ce73d7a9d1"
  },
  {
    "url": "component---src-pages-newgrad-js-866f05f55a6f45b1c0af.js"
  },
  {
    "url": "page-data/newgrad/page-data.json",
    "revision": "2f5320de9811980d894fee1733ca8d72"
  },
  {
    "url": "component---src-pages-register-js-d52b43db4efbae0c1320.js"
  },
  {
    "url": "page-data/register/page-data.json",
    "revision": "5268465e7a2db1b91e8ccc4d43d47fe2"
  },
  {
    "url": "component---src-pages-schedule-js-f78a72c0eb1ed56ff153.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "7d864e3067095cb48658593b0773b972"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "50993439975a4470f5577270c4191b8b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-fe28ff561e652c8a47c5.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
