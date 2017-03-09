importScripts('./path-to-regexp.js');


const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION
};
const FILE_LISTS = ['js','css','png'];
const PATH_FILE = '/:file?'; // 缓存接受的路径文件


var goSaving = function(url){
  for(var file of FILE_LISTS){
    if(url.endsWith(file)) return true;
  }
  return false;
}


// 判断 path/method/contentType

function checkFile(request){
  var matchPath = pathtoRegexp(PATH_FILE);
  var url = location.pathname;
  var method = request.method.toLowerCase();
   url = matchPath.exec(url)[1];
  return !!(goSaving(url) && method === 'get');
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  var urlsToPrefetch = [
    'vendor.js'
  ];

  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
      var cachePromises = urlsToPrefetch.map(function(urlToPrefetch) {
        var url = new URL(urlToPrefetch,location.href);

        console.log('now send the request to' + url);

        var request = new Request(url);
        return fetch(request).then(function(response) {
          if (response.status >= 400) {
            throw new Error('request for ' + urlToPrefetch +
              ' failed with status ' + response.statusText);
          }

          return cache.put(urlToPrefetch, response);
        }).catch(function(error) {
          console.error('Not caching ' + urlToPrefetch + ' due to ' + error);
        });
      });

      return Promise.all(cachePromises).then(function() {
        console.log('Pre-fetching complete.');
      });
    }).catch(function(error) {
      console.error('Pre-fetching failed:', error);
    })
  );
});


self.addEventListener('fetch', function(event) {
  // 检查是否需要缓存
  if(!checkFile(event.request))return;

  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
          console.log('save file:' + location.href);
          // 需要缓存,则将资源放到 caches Object 中
          return caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
    })
  );
});

// method
// resource


self.addEventListener('activate', event => {
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (CURRENT_CACHES.prefetch.includes(key)) {
          console.log('old sw.js will be updated。...');
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('V2 now ready to handle fetches!');
    })
  );
});

self.addEventListener('message',event =>{
  // test send note
  sendNote();

  console.log("receive message" + event.data);
  // 更新根目录下的 html 文件。
  var url = self.location.href;
  console.log("update root file " + url);
  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(cache=>{
        return fetch(url)
          .then(res=>{
            cache.put(url,res);
          })
    })
  )
});



self.addEventListener('push', function(event) {

});

self.addEventListener('notificationclick', function(event) {
  var messageId = event.notification.data;
  event.notification.close();
  if(event.action === "focus"){
    focusOpen();
  }
});

function sendNote(){
  console.log('send Note');
  var title = 'Yay a message.';
  var body = 'We have received a push message.';
  var icon = '/student.png';
  var tag = 'simple-push-demo-notification-tag'+ Math.random();
  var data = {
    doge: {
      wow: 'such amaze notification data'
    }
  };
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag,
      data: data,
      actions:[
        {
          action:"focus",
          title:"focus"
        }]
    })
}

function focusOpen(){
  var url = location.href;
  clients.matchAll({
    type:'window',
    includeUncontrolled: true
  }).then(clients=>{
    for(var client of clients){
      if(client.url = url) return client.focus(); // 只在手机端有效,PC 上无效
    }
    console.log('not focus');
    clients.openWindow(location.origin);
  })
}
