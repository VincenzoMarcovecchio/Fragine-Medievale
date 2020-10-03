<img src="public/media/logo.svg" alt="alt text" height="40" alt='Nextatic logo'>

A fully static website generator with i18n features, Netlify serverless CMS, Next.js, SCSS and Typescript.

See the [live demo](https://nexstatic.netlify.app/)

### Stack

- [Netlify CMS](https://www.netlifycms.org/)
- [Next.js](https://nextjs.org/)
- [SCSS/SASS](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)

### Features

- Builds to a fully static website deployable to Netlify
- Built for internalisation using i18n Netlify CMS features
- CMS driven routes and navigation
- A good starter layout with all the essentials
- Provides basic utilities to easily extend and put in use CMS entries

### Setup

```
git clone git@github.com:tancredi/nextatic.git
cd nextatic
npm install
```

### Develop

```
npm run dev
# The dev server runs on http://localhost:3000 by default
```

### Build

```
npm run export
# The static website will be built in the `dist` folder
```

### Edit

The admin interface will be available in `/admin` using Netlify authentication.

### Multi-language setup

By default, the boilerplate is setup in English (`en` - default) and Italian (`it`) - you can change the locales and default locale under the `i18n.locales` and `i18n.default_locale` key in `public/admin/config.yml`.

The changes should be reflected immediately as `src/core/config` reads the settings directly from the CMS YAML configuration.

Internalisation features on Netlify CMS are still in beta, you can read about them [here](https://deploy-preview-4139--netlify-cms-www.netlify.app/docs/beta-features/#i18n-support).

In a nutshell, both collections and specific fields in the config should have a `i18n: true` attribute, which will create entries in different folders.

When the models pull content in the Next.js codebase using methods exported by `utils/content`, the data will extend the default language entry and extend with values from the translated entry.

**Note:** you must keep the `i18n.structure` set to `multiple_folders` as this boilerplate.

### What is it good for?

This is a good setup if you're looking to tackle building a static website with some CMS requirements in at least than one language, as most of the complexity is involved in the routing and merging of content from the CMS.

Otherwise, there would be a lot of stripping down to do, and I would recommend starting from scratch.

The main restriction is the assumption that most of the website will live under the `/[locale]/[page-slug]` route, for example `/en/my-page`.

### How does it work?

As you can see from the Next.js routes in `src/pages`, most of the work is done by a single route, `[locale]/[slug].tsx`, which will load the localised content of a page entry from the CMS and render the `src/page-components/DefaultPage.tsx` component with it or any other component mapped to that slug in `src/page-components/index.ts`

### Models

Modules exporting CMS entry types and sync getters can be found under `src/models`. They can be used as templates for new CMS entries, as long as the model matches definitions in the CMS configuration, found in `public/admin/config.yml`

### Netlify config

Use the following configuration to deploy correctly on netlify:

- **Build command:** `npm run export`
- **Publish directory:** `dist`

### Contributions

The project started by forking [iammary/nextjs-netlifycms-ts-starter](https://github.com/iammary/nextjs-netlifycms-ts-starter), so thanks to [@iammary](https://github.com/iammary)
