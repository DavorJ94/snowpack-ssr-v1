/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  // {
  //   "dir": "./build/dist/stylesheets",
  //   "filename": "[name].css"
  // }
  plugins: [],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    minify: true,
  },
  packageOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: "/",
    metaUrlPath: `dist`,
  },
  alias: {
    // prettier-ignore
    "react": "preact/compat",
    "react-dom": "preact/compat",
  },
};
