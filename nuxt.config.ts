// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  components: true,

  css: ["normalize.css/normalize.css", "@/assets/css/tailwind.css"],

  googleFonts: {
    base64: true,
    overwriting: true,
    families: {
      Poppins: [400, 500, 700],
    },
  },
});
