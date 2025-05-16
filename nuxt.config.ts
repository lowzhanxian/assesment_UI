// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'app',

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css' // ✅ for icons
  ],

  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker', 'vue3-apexcharts'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'vue3-perfect-scrollbar/nuxt',
    '@nuxtjs/leaflet'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
})
