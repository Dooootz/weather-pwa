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
            // .then - execute a callback function that
            // takes the cache as a parameter 
            .then((cache) => {
                // if successful, log message
                console.log('Opened cache')
                // return cache & add our set 'urlsToCache'
                return cache.addAll(urlsToCache)
            })
    )
});


// === Listen for requests ===
// listen for fetch requests 
self.addEventListener('fetch', (event) => {
    // if we get a fetch request then 'respondWith' returns a promise
    event.respondWith(
        // first we match all the fetch requests  e.g request for an image/assests OR API call etc
        // then we return another promise
        caches.match(event.request)
            .then(() => {
                // for each request, we want to return a fetch for each specific request 
                // e.g each time we request, we always want to get updated data 
                return fetch(event.request) 
                    // if we catch an error... that means theirs no internet connection
                    // in that case we return the offline.html (which is our page when theirs no internet connection)
                    .catch(() => caches.match('offline.html'))
            })
    )
});


// === Activate the SW ===
self.addEventListener('activate', (event) => {

});