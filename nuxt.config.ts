// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt.Q - Interação Anônima através de Perguntas',
      meta: [
        { 
          name: 'description', 
          content: 'Nuxt.Q é uma plataforma de interação onde você pode criar salas para receber perguntas anônimas, gerenciar e marcar como lidas.'
        },
        {
          name: 'keywords',
          content: 'Nuxt.Q, perguntas anônimas, interação, Front-end, gerenciamento de perguntas'
        }
      ],
    }
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@prisma/nuxt", "@vite-pwa/nuxt"],

  components: true,

  css: ["normalize.css/normalize.css", "@/assets/css/tailwind.css"],

  googleFonts: {
    base64: true,
    overwriting: true,
    families: {
      Poppins: [400, 500, 700],
    },
  },
    ssr: false,
    router: {
      middleware: ['auth']
    },
    nitro: {
      preset: 'vercel-edge'
    }

});