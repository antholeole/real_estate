import { createTRPCProxyClient } from "@trpc/client";
import { httpLink } from "@trpc/client/links/httpLink";
import type { AppRouter } from "../../../server/src/router";

export const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpLink({
            url: (import.meta.env.SITE ?? 'http://localhost:8458') + '/api',
        }),
    ],
});
