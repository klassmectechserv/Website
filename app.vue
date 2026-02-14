<template>
  <div>
    <UiToast class="z-[9999999]" />
    <NuxtLayout class="z-10">
      <NuxtPage class="z-10" />
    </NuxtLayout>
    
    <!-- Chat Widget - Bottom Right -->
    <div class="fixed bottom-6 right-6 z-[999998]">
      <ChatWidget />
    </div>
    
    <!-- Background Audio - Bottom Left -->
    <ClientOnly>
      <div class="fixed bottom-6 left-6 z-[999998]">
        <BackgroundAudio src="/audio/ambient-tranquility-serene-soundscapes-365048.mp3" />
      </div>
    </ClientOnly>
  </div>
</template>

<style>
body {
  font-family: 'Roobert PRO', sans-serif;
}
</style>

<script setup lang="ts">

useHead({
  title: 'Klassmec Technical Services Nigeria Limited – Engineering Excellence',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})

useSeoMeta({
  title: 'Klassmec Technical Services Nigeria Limited – Engineering Excellence',
  ogTitle: 'Klassmec Technical Services Nigeria Limited – Engineering Excellence',
  description: 'Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria.',
  ogDescription: 'Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria.',
  keywords: 'engineering services Nigeria, mechanical engineering, structural engineering, civil construction, Klassmec, technical services Nigeria',
  author: 'Klassmec Technical Services Nigeria Limited',
  ogType: 'website',
  ogUrl: 'https://klassmec.com',
  ogImage: 'https://klassmec.com/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Klassmec Technical Services Nigeria Limited – Engineering Excellence',
  twitterDescription: 'Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria.',
  twitterImage: 'https://klassmec.com/og-image.jpg'
})
</script>