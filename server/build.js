const ignorePlugin = require("esbuild-plugin-ignore");
require("esbuild").build({
    entryPoints: ["src/worker.ts"],
    bundle: true,
    outfile: "../client/dist/_worker.js",
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
