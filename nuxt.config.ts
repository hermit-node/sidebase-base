import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxtjs-naive-ui',
    '@nuxt/icon',
    'vuetify-nuxt-module'
  ],
  extends: ['@sidebase/core'],

  typescript: {
    shim: false
  },

  compatibilityDate: '2025-04-12'
})