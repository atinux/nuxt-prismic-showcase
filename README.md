# Showcase: Nuxt.js + Prismic.io

<p align="center"><img src="https://user-images.githubusercontent.com/904724/61715055-916dcf00-ad5c-11e9-8d20-21b513e30370.jpg" alt="nuxt-prismic-showcase" /></p>

<p align="center"><a href="https://nuxt-prismic.surge.sh">Live demo</a></p>

## Features

- Support all different Nuxt.js modes (ssr / spa / static generated)
- Display Prismic Toolbar to quick edit
- Support Prismic Preview mode

## Project setup


### Install the dependencies

```
yarn install
```

### Update the config

- Change to your [prismic endpoint](https://github.com/Atinux/nuxt-prismic-showcase/blob/master/nuxt.config.js#L25)
- Update the [link-resolver.js](https://github.com/Atinux/nuxt-prismic-showcase/blob/master/app/prismic/link-resolver.js)

### Development server

```
yarn dev
```

Then go to [http://localhost:3000](http://localhost:3000)

### Compiles and minifies for production

```
yarn build
```

### Run in production (with Nuxt.js server)

#### With Nuxt.js server

You will need a node.js hosting (Heroku, Now, CleverCloud, etc).

```
yarn start
```

#### Statically generated

```
yarn generate
```

Then you can upload the `./dist/` directory to any static hosting (Netlify, Surge.sh, GH Pages, etc).

### Links

- [Nuxt.js](https://nuxtjs.org)
- [Prismic](https://prismic.io)
- [prismic-nuxt module](https://prismic-nuxt.js.org/)
