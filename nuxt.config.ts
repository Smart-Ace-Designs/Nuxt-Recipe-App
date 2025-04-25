import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-01",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Recipe App",
    },
  },

  modules: ["@nuxt/image", "@nuxt/icon", "@nuxtjs/google-fonts"],
});
