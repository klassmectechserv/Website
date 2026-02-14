<script setup lang="ts">
const isVisible = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isVisible.value = window.scrollY > 500
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-4 scale-75"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-75"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-forest-700 text-white shadow-lg shadow-forest-700/30 flex items-center justify-center hover:bg-gold-500 hover:shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>
