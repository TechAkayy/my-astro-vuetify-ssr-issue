import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
// import Pinegrow from '@pinegrow/astro-module'

import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import site from './src/site'
const { url } = site

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [
    vue({
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
      // https://github.com/vuetifyjs/vuetify-loader/issues/317
      template: {
        transformAssetUrls: {
          ...transformAssetUrls,
          'v-carousel-item': [
            'src',
            'lazySrc',
            'srcset',
            ':src',
            ':lazySrc',
            ':srcset',
          ],
          'v-card': [
            'image',
            'prependAvatar',
            'appendAvatar',
            ':image',
            ':prependAvatar',
            ':appendAvatar',
          ],
        },
      },
      appEntrypoint: '/src/app',
    }),
    

    // Pinegrow({
    //   liveDesigner: {
    //     iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
    //     devtoolsKey: 'devtools', // see app.ts
    //     vuetify: {
    //       /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
    //       configPath: 'vuetify.config.ts', // or file where vuetify is created
    //       // themePath: false, // Set to false so that Design Panel is not used
    //       // utilities: false,
    //       // restartOnConfigUpdate: true,
    //       restartOnThemeUpdate: true,
    //     },
    //     // plugins: [
    //     //   {
    //     //     name: 'My Awesome Lib 3.0',
    //     //     key: 'my-awesome-lib',
    //     //     pluginPath: fileURLToPath(
    //     //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
    //     //     ),
    //     //   },
    //     // ],
    //   },
    // }),
  ],

  build: {
    inlineStylesheets: 'never', // or "always", or "auto"
  },

  vite: {
    plugins: [
      {
        name: 'vuetify-plugin',
        configResolved(config) {
          const idx_vue = config.plugins.findIndex(
            (plugin) => plugin.name && plugin.name === 'vite:vue'
          )
          //@ts-ignore
          config.plugins.splice(
            idx_vue + 1,
            0,
            Vuetify({
              /* If customizing sass variables of vuetify components */
              // styles: {
              //   configFile: 'src/assets/vuetify/settings.scss',
              // },
              //...
            })[0]
          )
        },
      },
    ],

    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
