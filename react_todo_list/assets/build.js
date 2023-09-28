const esbuild = require("esbuild");
const postcss = require('esbuild-postcss');

const args = process.argv.slice(2);
const watch = args.includes('--watch') || process.env["ESBUILD_WATCH"] === "true"

const loader = {
 '.js': 'jsx'
};

const plugins = [
  postcss(),
];

// Define esbuild options
const opts = {
  entryPoints: ["js/app.js"],
  bundle: true,
  logLevel: "info",
  target: "es2017",
  jsx: 'automatic',
  outdir: "../priv/static/assets",
  external: ["app.css", "fonts/*", "images/*"],
  loader: loader,
  plugins: plugins,
  minify: args.includes('--deploy'),
};

if (watch) {
  esbuild
    .context({ ...opts, sourcemap: "inline"})
    .then((ctx) => ctx.watch())
    .catch((_error) => process.exit(1));
} else {
  esbuild.build(opts);
}
