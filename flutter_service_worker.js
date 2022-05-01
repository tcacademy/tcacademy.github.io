'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a3e653892c8f271d7cb8fdafd3603ddf",
".git/config": "e4c87d6eb632b98650ba3994a4d67fe1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4f85474f1e693afb41706b90e942fb44",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6b6bc9d5e14dc6e704c394a6b2d9589f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb79bda67033940b6e7b70a7b45ca4a6",
".git/logs/refs/heads/master": "2a2fd22c7d6c62c3077619b910fb11e0",
".git/logs/refs/remotes/origin/master": "f00163d82161cee6ca16473d5b9d09fa",
".git/objects/01/0f685c0bba1ed13ad9a493e31280be7ad225d9": "2b02890489582277432b610a297c1adc",
".git/objects/02/952a7928719d6c1cfc39eaaf4329b35fcdc775": "fd93b4ad6ef918354c67ea01484be118",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/350fea6cfb97a7e22989f03d2b93742106c4e9": "16ef0bc5db7e8bfc935e8465e050958e",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/17/bc2daa62f41d94751b90c2816f245bc8f8461e": "3113a9bffa2aa2e3ed28a0af0d6706e4",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/fa4959feb0cb160579b4ec6fd3bc8390ecaf26": "56fad33d4b623633fc0a21457f5d9ba2",
".git/objects/29/f64fc5bb5af668a8265f7846dd928b8b20fa9c": "257b7bd9927716b00eee57fd8db82feb",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/ba84bd1cb50836387400399b16d5f7eb99e5b9": "8df80da7bd5145e8ba28270dd78c1ac9",
".git/objects/3e/0712cdace3755a99651a680ffa0594e0de5097": "249095b782efd7fc5038c0762296ade1",
".git/objects/3e/cc8c1a25e83e38c48e84f30222c578249ef033": "40d417b88c2167bde3f4ccc5e65399c9",
".git/objects/44/556bd9daa9b6b29ec1e7cc12b63a68067714b7": "16cf7a96f99ca9c3c56dfebfe6153b12",
".git/objects/46/d7b9a2faa23930badbf9ef667ddfd2a7ac83df": "4429c3d7ecd269197a7d66aebb5ccb0b",
".git/objects/48/f720d0c525c309a0dec43210b9de015a271dbd": "b0ab3dfbaa4f05ddb159ae70f600791e",
".git/objects/4a/e34c035e41c6ecb23655200b4b761e8d7d809d": "f6fefc0e2d15a8d7cbeb1ccc6b873be0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/7f6bcd026ca447940c8d2849e1b8cf46f16725": "114542c4d57d61de9dbfc2cfc29cdb19",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/176cfde65ce8d1320d8de481c45e38c105d42d": "aed1537c95621b853a3756fcd0ca7092",
".git/objects/56/16a877939e679c56737860158a157c2cbae5e5": "d7ccc27ac781fb82b4905e7a44079cd2",
".git/objects/57/349b5a1537acf8858198f29aa90b54b1dbc597": "71a8ee7e8ebf336fd84797702f0110c3",
".git/objects/5c/8c6c0cd15f4a463d779cb2da1eb86cb2cf4995": "2e158829b97a6aef157af05ba54e455e",
".git/objects/5c/dcbc4e503502ae3b02824dc21d28d68e1d3c1c": "2f4c64274c1accd8f9e76292221add66",
".git/objects/5f/186f2c451937f7f24621641145e190931eeb8f": "cd78739474922c0bdf152c2982a88faa",
".git/objects/63/4df6848966188bb84069a7600a3d7d70d79ce7": "8c52674593da2a4a42680753f331db1e",
".git/objects/63/8a2266b4b80f27fca05892c3a8bff11ecbfe0f": "1bd855f2d1470083e0d09aeff9caba9d",
".git/objects/66/e633c079641825ad291be1d6115cee230e7eec": "fc98bbac31b38d3563341b9aae635783",
".git/objects/6b/a127a010f884efa4f584be95a7519b37c9c167": "d2c91f57089f85f1c7e6aba3fd4157c0",
".git/objects/6e/d12ca1ac22b14bbef8d5ef7d2a6a8d9b2efd4c": "86cc8a690ed2f3544e08370765b85d13",
".git/objects/71/fa5eaf7ee1b8c5ad6ee9197816523f64207618": "7b8197452bdedc430ee7e0af20d530a2",
".git/objects/75/456872e50b4a2fb0571fc02bdec45c8baa4da1": "3cba954cb54548f092fd4152889b189f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/859698c262fa2498515d2a381753b19c987be7": "52e6f2df87c2a0b6a8d728095bd6e079",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/7b/edc73de5beac972c9133b882f7708aba88d34f": "fa22884ef35d1ffd345288a58e35cec6",
".git/objects/81/6208a7839359b3695acd55d155b491066c1caf": "5a813a0e7ca019be6eb435ee706c3fc2",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/052175ca2b56adab9e96bf4ccea91d3f9521b7": "634ab6e64d9fc8e6695594e15a55719d",
".git/objects/89/e0f274ddabfee4f24d6cf9c19c4260746b7d39": "cd3c89af1627e112924a16d986928978",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8c/154d4f2cb28031316a20f65c3d5e2ea7428e74": "91886682c17be1abfba22ef470c3f78e",
".git/objects/97/6d0eed592df75523a1c8dbb52aecb7c2fa0fbe": "eeecf83d5d5c45d625d26062d392b30c",
".git/objects/98/c80b3ebd1d3f91fcecfccfb57859de67adfbae": "f9b1d1577a7b219898ecc40da42c07ac",
".git/objects/99/aeb4f7540401e634e1978184466f3ea74d8051": "3732e76c656aec13f955300f914b8499",
".git/objects/9a/67125bfea3df6fb241ea30d39feda71277f860": "d608f1c20025b8f130e518a3a2b2367d",
".git/objects/9f/4e2bb5ee62156a10bbf8417632d18f37b6d30d": "1da922899e37e8b78094b16ec34ff837",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/6e88d60a6385ef3585a2213ed7e399921c0242": "47293a7e774e96d699a8e36713e88adc",
".git/objects/a8/7cdcfda093ac990a6773d716c021976220e087": "508ccadd32d6172e6431083dc415d032",
".git/objects/a9/c252feb03b7b5a7225e4de0a3f3d13ad83a372": "b99baa0e0cbbd872951e50b71c97420f",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/b02acb237b00de3cec021cd6e04614c56979e6": "628a4c014e4e72f436042e97df3ca854",
".git/objects/b0/e25906b7ff402cb776c5cafcd1eca000885816": "43217acedb8f60e2b37cf1bc8c7c3158",
".git/objects/b4/587db048aa292ffd43244543a1bea4c0900afe": "7a491cf8f4cca37349a406d7f0185d64",
".git/objects/b5/007e0855241e1f72eb13f01693b9a07dcb9501": "ad7fc9c67c8e8819d8e2f7d78bb51e0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/aa69dd4b3e2fc0b645f9717ae01dc8e5fd73c9": "17f2e1a84baf4b1e39ffcae76245a521",
".git/objects/c0/de2929b5ad784e984c2ca02a5804b7650333ae": "eed7bb42dc8a5b8d4056a8b340842f99",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/c79ee6195995a6564518a16f0283799953d648": "8102cb06fe19e8958ef5e61d517c8659",
".git/objects/c6/f4636d4a3eba04e460e572d6a68517eb0770d3": "29395f83d1f1646c225b3f5003e2f2dc",
".git/objects/c8/fd806f1e74527f1545384d4a0126523fed4e0f": "6b3f41f6862092c756381f2852696a18",
".git/objects/c9/9eae7a30b3c0335955bcba52deb7cac88f8b6d": "28c88b9d75ab360149544c2dff43cce4",
".git/objects/c9/e4035cd3088f95e16becc850d4e52e42a940f7": "1c060869b7a12537615bd20656b1e74d",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d1/fce3538787abd7a1ba92f80bca32be95c44e61": "2c39374ccf75204b485012698a08dc16",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/4160c3c9b2cb298c9cd3f2d365294f6b227c0f": "5f6abbbede0767b3e3bb97b3b81c9fd2",
".git/objects/df/3959ac69291f9bbbffba40408813b080908625": "a062b6f64150177daee8211a9f4a531b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bffc2f55e816ab3dd1d0e530ab768028a30691": "9374091a7d4eca90dcf6d68d976ea1ca",
".git/objects/ed/b059a3f877cb87a82f5798cb63f5f8a37e6757": "57b6135f01a56f62f8a47dd675809635",
".git/ORIG_HEAD": "d907568acf91c0f1dd6cd74014402984",
".git/refs/heads/master": "bfaa777ae946daf32cdd4b63d6f23c10",
".git/refs/remotes/origin/master": "bfaa777ae946daf32cdd4b63d6f23c10",
"assets/AssetManifest.json": "c36c429ef4388f3ec1821fa23ed4c4f8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7a57c2dc1dfa8fb1997d80a05a91ce53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbf6b972d114385e26d44050c4b65208",
"/": "fbf6b972d114385e26d44050c4b65208",
"main.dart.js": "e527cb272e483f528ce0fbe44f2de192",
"manifest.json": "807b58909da715972c83c476479536dd",
"version.json": "467986965633b468ff2eb504a4a70375",
"_config.yml": "d88166bbeaf9421921db9fb119080112"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
