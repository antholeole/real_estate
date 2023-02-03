import { client } from "lib/trpc_client";

export const greet = async () => {
    console.log(await client.greetings.query({
        name: "Hannah"
    }))
}