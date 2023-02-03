import { createTRPCProxyClient } from "@trpc/client";
import { httpLink } from "@trpc/client/links/httpLink";
import type { AppRouter } from "../../../server/src/router";

export const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpLink({
            url: "http://127.0.0.1:8787/api",
        }),
    ],
});
