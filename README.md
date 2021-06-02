# Simple snowpack SSR for multiple components (multiple divs) and css modules

Simple to do app built with snowpack and optimized for SSR. Babel is used for css modules conversion with custom function.
SSR is created using snowpack as building package, and http is used for server initialization.

There is still a lot of improvement to be done in the SSR approach taken in the app, like not downloading stylesheets twice (since it is partial SSR) and a few more things.

This repository is built based on the initial work of Matt Hoffner (https://github.com/matthoffner/snowpack-react-ssr).

For this app, preact, htm, fbemitter, and Navigo are used.

For starting the app:

```sh
yarn install
```

```sh
yarn build
```

```sh
yarn server
```

Will run on port 3000.
