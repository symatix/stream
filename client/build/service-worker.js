"use strict";var precacheConfig=[["/index.html","d41ac0e0d745ec3730f87ea59fa8fe51"],["/static/css/main.9353314a.css","d7506dac15add3d47373d223496d2e45"],["/static/js/main.cc0ccd5f.js","3a4e4cd46f61192aa9600731444492b2"],["/static/media/Gotham-Light.9249716e.ttf","9249716e1e9daf627a5beec6b4a5adaf"],["/static/media/GothamRounded-Bold.19a95730.woff","19a95730914b90cf523c0439bc5aa0e7"],["/static/media/GothamRounded-Bold.20c81784.woff2","20c817845a51e48798b4884a45a4dcbd"],["/static/media/GothamRounded-Bold.522ba9ca.eot","522ba9caf077edc39a28f7aba5a4cf46"],["/static/media/GothamRounded-Bold.b426f8dc.ttf","b426f8dcdafa8df731a378dc69b7557d"],["/static/media/GothamRounded-Bold.cb719d96.svg","cb719d96a3a8e4d9888741a431d90249"],["/static/media/GothamRounded-Book.3dd81354.ttf","3dd813544e22e4c942e9637bbb5e50cf"],["/static/media/GothamRounded-Book.50d4a83c.eot","50d4a83c978f28faf36af6de3079cd4c"],["/static/media/GothamRounded-Book.791f69e6.woff","791f69e6cacc070aca8ebecdb8e0e3a2"],["/static/media/GothamRounded-Book.ade5999a.svg","ade5999a38d5deff33631cd521f2d3dd"],["/static/media/GothamRounded-Book.aec68114.woff2","aec68114beb2ca50ea4be4f9c598614c"],["/static/media/GothamRounded-Light.08b43ad9.svg","08b43ad9257c513d1ee664f7fc54ae36"],["/static/media/GothamRounded-Light.0d5ad563.woff","0d5ad5635f8c3bbb4742e1ef9704dc38"],["/static/media/GothamRounded-Light.1d64c0ee.woff2","1d64c0eef2ea9b2679dbae12259f3899"],["/static/media/GothamRounded-Light.90e6ed5e.eot","90e6ed5e2ba55bd0f2e6f2e8617b420a"],["/static/media/GothamRounded-Light.e536db50.ttf","e536db50791a42bec808f071b87a06a6"],["/static/media/GothamRounded-Medium.0ad47d05.woff2","0ad47d056b98abe89db1e4be898e08c8"],["/static/media/GothamRounded-Medium.51a96cc8.ttf","51a96cc8f2e31cdb9cea33ee8c7f1f7c"],["/static/media/GothamRounded-Medium.60179a5d.eot","60179a5df8af340a538a8dcbe8ccaf26"],["/static/media/GothamRounded-Medium.ea152a7b.svg","ea152a7b020957be4781678c297c6ffd"],["/static/media/GothamRounded-Medium.f369ff93.woff","f369ff93a4078dcea7de5dbb4544d82b"],["/static/media/VarelaRound.1aff14a3.ttf","1aff14a3caa6294e58152ed55529eda2"],["/static/media/VarelaRound.1c93e4e2.woff","1c93e4e2d8b8d6306d60ab0cdf19aa63"],["/static/media/VarelaRound.8131f671.woff2","8131f6718b23b90b0155d588340f164a"],["/static/media/VarelaRound.d997fa68.svg","d997fa688dcdbcc153917428f074b6b2"],["/static/media/VarelaRound.f7ffa6a4.eot","f7ffa6a4b638d3ecbcec6a1a3fef7184"],["/static/media/background_desk.96144d7e.jpg","96144d7ef8887828e50ac33deb772445"],["/static/media/ctrl_minus.d406e73a.svg","d406e73aed3571b68b58c362824e67a3"],["/static/media/ctrl_plus.dd50031e.svg","dd50031e606af574ee5b8dcccf1b59f8"],["/static/media/ctrl_previous.c487e801.svg","c487e801278949ad055e158452ddcbb2"],["/static/media/ctrl_skip.be1839bb.svg","be1839bb1415274ff03b3d7d3ffe853d"],["/static/media/ctrl_speaker0.c1a1e89b.svg","c1a1e89b57f88e36627c5a66d6269169"],["/static/media/ctrl_speaker1.e7fb2fb0.svg","e7fb2fb0f766b586693d07b0a5d7fc3a"],["/static/media/ctrl_speaker2.f56a2226.svg","f56a22260f68c0b1147594964e414d30"],["/static/media/ctrl_speaker3.791a2bc6.svg","791a2bc65bccbf4c86dabf7d6b7bbe40"],["/static/media/ctrl_speaker4.31b26328.svg","31b26328a9931faa4841926bf1ce2bfc"],["/static/media/next.9edc0ab9.svg","9edc0ab9fef00493801c3c12cefd9d10"],["/static/media/pause.2f666059.svg","2f666059f20da6a3976f7094db909844"],["/static/media/play.05d1de05.svg","05d1de051217bdbd98d3011f9d88fa86"],["/static/media/prev.55afec9a.svg","55afec9a0a5238ceb11af09d2c7cf92a"],["/static/media/yammat_logo.34429cf9.svg","34429cf9679aed57570ac0af5ebdd53e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});