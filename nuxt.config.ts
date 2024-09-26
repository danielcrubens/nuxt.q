// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@prisma/nuxt","@nuxtjs/seo"],

  components: true,

  css: ["normalize.css/normalize.css", "@/assets/css/tailwind.css"],

  googleFonts: {
    base64: true,
    overwriting: true,
    families: {
      Poppins: [400, 500, 700],
    },
  },
    ssr: true,
    router: {
      middleware: ['auth']
    },
    prisma: {
      autoSetupPrisma: true,
      clientUrl: process.env.DATABASE_URL,
    },
    vite: {
      resolve: {
        alias: {
          '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
        },
      },
    },
    ogImage: {
      fonts: ['Poppins:400', 'Poppins:500', 'Poppins:700'],
    },
    site: {
      url: process.env.SITE_URL,
    },
});
