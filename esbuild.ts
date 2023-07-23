import {buildSync} from "esbuild";

buildSync({
    entryPoints: ["./packages/foo/index.ts"],
    bundle: true,
    outfile: "./dist/foo.js",
    format: "esm"
})
