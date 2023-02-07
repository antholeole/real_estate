const ignorePlugin = require("esbuild-plugin-ignore");

require("esbuild").build({
    entryPoints: [process.env.LOCAL ? "src/_local.ts" : "src/worker.ts"],
    bundle: true,
    outfile: process.env.LOCAL ? "dist/_worker.mjs" : "../client/dist/_worker.mjs",
    target: "chrome96",
    plugins: [
        ignorePlugin([
            {
                resourceRegExp: /http$/,
                contextRegExp: /.*/,
            },
        ]),
    ],
});
