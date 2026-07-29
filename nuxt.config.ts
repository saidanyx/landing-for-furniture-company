// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/css/style.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/seo'],

  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: ['400', '600', '700', '900'],
        styles: ['normal']
      },
      {
        name: 'Nunito',
        provider: 'google',
        weights: ['400', '500', '600', '700'],
        styles: ['normal']
      }
    ]
  },

  site: {
    url: 'https://meyko.ru',
    name: 'МЭЙКО',
    description: 'Мебель на заказ в Воронеже от мебельной фабрики МЭЙКО',
    defaultLocale: 'ru'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})