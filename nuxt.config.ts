// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: [
    "~/components",
    { path: "~/icons", extensions: ["vue"], prefix: "Icon" },
  ],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },

        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },
  generate: {
    routes: ["/"],
  },
  target: "static",

  modules: [
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@hypernym/nuxt-gsap",
    "@nuxt/image",
    "nuxt-lucide-icons",
    "@vueuse/nuxt",
    "@nuxt/content",
    "nuxt-viewport",
  ],
  lucide: {
    namePrefix: "Icon",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  gsap: {
    provide: true,
    extraPlugins: {
      flip: true,
      draggable: true,
      scrollTrigger: true,
      scrollTo: true,
    },
  },

  site: {
    url: "https://mechatronicgroup.com/",
    name: "Mechatronic Mitra Solusi",
  },
});