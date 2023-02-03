import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  return { req, resHeaders };
}

export const t = initTRPC.context<inferAsyncReturnType<typeof createContext>>().create();