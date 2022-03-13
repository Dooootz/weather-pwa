// Create our cache name - cache is the storage of the browser 
// for example - if we make a request to load an image...
// we can store that data in our 'browser storage' 
// next time we need that data, we can simply load it from the cache 
// This is much faster & more effective 
const CACHE_NAME = 'version-1'

// store urls that we want to cache 
// offline.html is the page that loads when their is no internet connection
const urlsToCache = ['index.html', 'offline.html']

// 'this' (in the service worker file) represents the SW
const self = this;

// === Install SW === 
// event listener takes 2 parameters 
// first parameter listens for an install event 
// second parameter is excecuted once the event is called 
// ^ get the 'event' as the callback parameter
self.addEventListener('install', (event) => {
    // wait until the following code is run
    event.waitUntil(
        // open the cache & name it 'CACHE_NAME'
        // this returns a promise
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')

                return cache.addAll(urlsToCache)
            })
    )
});


// === Listen for requests ===
self.addEventListener('fetch', (event) => {

});


// === Activate the SW ===
self.addEventListener('activate', (event) => {

});