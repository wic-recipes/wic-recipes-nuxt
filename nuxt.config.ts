// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.scss'],
  devtools: { enabled: true },
  ssr: false,
  hooks: {
    'prerender:routes': (routes) => {
      // maybe this is necessary?
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
        },
      },
    },
  },

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs/')
    }
  },

  modules: ['@nuxt/image'],

  app: {
    buildAssetsDir: '/_nuxt/', // Default Nuxt assets path
  },
})