// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/css/style.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@nuxt/fonts', '@nuxt/image'],

  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: ['700', '900'],
        styles: ['normal']
      },
      {
        name: 'Nunito',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal']
      }
    ]
  },
})