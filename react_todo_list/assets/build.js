const esbuild = require("esbuild");

const args = process.argv.slice(2);
const loader = {
 '.js': 'jsx'
};

const plugins = [
  // Add and configure plugins here
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

if (args.includes('--watch')) {
  esbuild
    .context({ ...opts, sourcemap: "inline"})
    .then((ctx) => ctx.watch())
    .catch((_error) => process.exit(1));
} else {
  esbuild.build(opts);
}
