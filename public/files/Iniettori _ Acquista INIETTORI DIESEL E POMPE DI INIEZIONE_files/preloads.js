
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.it.4f609e25716c60de1780.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8163.latest.it.afd8074425d101afc0b5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2307.latest.it.81503ae9ef057f1823b6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.latest.it.03c0b36e91bf756d5735.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.it.906f811cd7448e736253.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.latest.it.7c8f677325d8263eb161.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8383.latest.it.650e4663e61705d98908.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.latest.it.eddf96d2cfec72a2522c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4768.latest.it.8e1c317dc7fe99f1fc70.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2978.latest.it.11b8db7c319710c89aaf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6117.latest.it.f5a6f74ac35f575f62b9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3678.latest.it.58a044fb0f17b5d1bf5a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8156.latest.it.bd57bcd4e2664496fa6e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.it.31bd7ef2112a70756a67.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8163.latest.it.a27a3ad9b23acef02fb4.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.it.2e0eaac22a5cb50aa5d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.it.2e09285a536b15d91085.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  