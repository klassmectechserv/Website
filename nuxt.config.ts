// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
//   css: ['~/assets/css/main.css'],
//   app: {
//     head: {
//       title: 'Klassmec Technical Services Nigeria Limited',
//       meta: [
//         { charset: 'utf-8' },
//         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//         {
//           name: 'description',
//           content:
//             'Klassmec Technical Services Nigeria Limited – Connoisseurs of engineering excellence. Mechanical, Structural, and Civil Engineering solutions for Nigeria and beyond.',
//         },
//       ],
//       link: [
//         { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
//         {
//           rel: 'stylesheet',
//           href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap',
//         },
//       ],
//     },
//   },
//   typescript: {
//     strict: true,
//   },
// })

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,

  devServer: {
    port: 3001,
    host: 'localhost' // or '0.0.0.0' to allow external access
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Klassmec Technical Services Nigeria Limited – Connoisseurs of Engineering Excellence',
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },

        // ✅ SEO meta
        {
          name: "description",
          content: 'Klassmec Technical Services Nigeria Limited – Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria.'
        },
        {
          name: "keywords",
          content: 'engineering services Nigeria, mechanical engineering, structural engineering, civil construction, Klassmec, technical services Nigeria'
        },
        { name: "author", content: "Klassmec Technical Services Nigeria Limited" },

        // ✅ Open Graph (for social previews)
        { property: "og:title", content: "Klassmec Technical Services Nigeria Limited – Connoisseurs of Engineering Excellence" },
        {
          property: "og:description",
          content:
            "Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria with a focus on quality and safety.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://klassmec.com" },
        { property: "og:image", content: "https://klassmec.com/og-image.jpg" },

        // ✅ Twitter meta
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://klassmec.com" },
        { name: "twitter:title", content: "Klassmec Technical Services Nigeria Limited – Connoisseurs of Engineering Excellence" },
        {
          name: "twitter:description",
          content:
            "Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria.",
        },
        { name: "twitter:image", content: "https://klassmec.com/og-image.jpg" },
      ],

      link: [
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],

      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
          type: "text/javascript",
        },
      ],
    },
  },

  build: {
    transpile: ["lucide-vue-next"],
  },

  css: ['/assets/css/font/stylesheet.css', "/assets/css/main.css", "/assets/css/storefront-variables.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
  ],
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: 'https://klassmec.com/sitemap.xml',
  },
  sitemap: {
    sources: [
      '/',
    ]
  },
  seo: {
    // metadata is handled globally in head and app.vue
  },
  compatibilityDate: "2025-11-01"
});