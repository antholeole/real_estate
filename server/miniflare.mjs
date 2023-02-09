import { Miniflare, Log, LogLevel } from "miniflare";

const mf = new Miniflare({
    scriptPath: "dist/_worker.js",
    buildCommand: "npm run build:dev",
    buildWatchPaths: ["src"],
    host: "127.0.0.1",
    watch: true,
    sourceMap: true,
    port: 8458,
    log: new Log(LogLevel.DEBUG),
})

await mf.startServer()