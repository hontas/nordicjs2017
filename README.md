# Service Workers - use them!
Lightning talk @ Nordic.js 2017

View slides: https://hontas.github.io/nordicjs2017/

> There are only two hard things in Computer Science: cache invalidation and naming things.  
> – Phil Karlton

## Running on localhost with self signed certificates

Simply replace `localhost:1123` with your own

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:1123 
```
From: http://deanhume.com/home/blogpost/testing-service-workers-locally-with-self-signed-certificates/10155

## Links
- [sw specification](https://w3c.github.io/ServiceWorker/)
- [the offline cookbook](https://jakearchibald.com/2014/offline-cookbook/)
- [anything jake archibald ever said](https://jakearchibald.com)
- [sw api (mdn)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [sw introduction (google)](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
- [sw cookbook (mdn)](https://serviceworke.rs/)
- [using sw (mdn)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [sw-test (mdn)](https://github.com/mdn/sw-test)
- [is service worker ready](https://jakearchibald.github.io/isserviceworker ready/)
- [sw-examples (chrome)](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker)

## Related links
- [pwa checklist](https://developers.google.com/web/progressive-web-apps/checklist)
- [letsencrypt.org](https://letsencrypt.org/)

## tools
- [sw-toolbox (google)](https://github.com/GoogleChrome/sw-toolbox)
- [lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
