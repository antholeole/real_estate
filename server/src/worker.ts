import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from './context';
import { appRouter } from './router';

declare module globalThis {
  var MINIFLARE: string | undefined
}

const CORS_HEADERS = new Map([
  ['Access-Control-Allow-Origin', '*'],
  ['Access-Control-Request-Method', 'GET, POST'],
  ['Access-Control-Allow-Methods', '*'],
  ['Access-Control-Allow-Headers', '*']
]);

const fetch = async (request: Request): Promise<Response> => {
  const getTrpcResponse = () => fetchRequestHandler({
    endpoint: '/api',
    req: request,
    router: appRouter,
    createContext,
  });

  if (globalThis.MINIFLARE != undefined) {
    const res = request.method == 'OPTIONS' ? new Response() : await getTrpcResponse();
    CORS_HEADERS.forEach((value, header) => res.headers.append(header, value));
    return res
  }

  return getTrpcResponse()
}

addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
