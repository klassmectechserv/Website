export default defineNuxtConfig({
    ssr: true,

    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/google-fonts',
        // '@nuxtjs/pwa',
        // '@nuxtjs/robots',
        // '@nuxtjs/seo',
        // '@nuxtjs/sitemap'
    ],

    css: [
        '@/assets/css/main.css'
    ],

    googleFonts: {
        families: {
            'DM+Sans': [400, 500, 700],
            'Playfair+Display': [400, 700, 900]
        },
        display: 'swap'
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },

    compatibilityDate: '2024-04-03'
})
