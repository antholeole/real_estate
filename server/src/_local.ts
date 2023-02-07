import worker from "worker";

addEventListener('fetch', (event) => {
    event.respondWith(worker.fetch(event.request));
});