"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","987a4ab9a6215750d86432278c6c3488"],["/static/css/main.a59908ab.css","f0663b528154365f079c40d0d3db0e01"],["/static/js/main.540cdf6b.js","b03238c33e2c55df77f9df628fab2f6b"],["/static/media/apr2018.e6fc1385.png","e6fc1385f8c7d7bee2cad9fc1108d91d"],["/static/media/arbitrage.c1725fe5.png","c1725fe517c458d40bfc75fa4485ed8a"],["/static/media/feb2018.b2095376.png","b20953764524551dc141d8f5ce6b4ae5"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/imac-nodots.c1d1941d.png","c1d1941d162cc4de69f6e4eeaa478bb9"],["/static/media/imac.4df54549.png","4df54549405b3b98b5ecf81e9f71f4e0"],["/static/media/jan2018.bf4c7ccc.png","bf4c7cccd2b8e53336262cc40afb5d3a"],["/static/media/jul2018.902f88ee.png","902f88eef597a5cb084a007d58b57f33"],["/static/media/jun2018.27ad5fbc.png","27ad5fbc6ba9fda9e85e918f6c0a48f5"],["/static/media/mar2018.d47c2c7a.png","d47c2c7aeeba38d4dec1727e96518062"],["/static/media/may2018.8f6ae02e.png","8f6ae02ee58844ea29ddfefe3ba08c60"],["/static/media/oct2018.a67b5d39.png","a67b5d39e645861f6817c3fe98cd8fb8"],["/static/media/phone-nodots.6b82f1e6.png","6b82f1e6a3d9ad0b75b6b15edc360475"],["/static/media/phonebg.9e27c885.png","9e27c8854854d94dd25733cab29e170e"],["/static/media/shape-darker.bb1ecff1.svg","bb1ecff1b4222f003b3f8176a770c2f6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});