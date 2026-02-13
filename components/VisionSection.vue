<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

const coreValues = [
  { icon: '⚖️', label: 'Integrity', desc: 'Honest and ethical in every project and partnership.' },
  { icon: '🏅', label: 'Quality', desc: 'Uncompromising standards in every deliverable.' },
  { icon: '💡', label: 'Innovation', desc: 'Embracing modern solutions to engineering challenges.' },
  { icon: '🛡️', label: 'Safety', desc: 'Zero-compromise approach to workplace safety.' },
  { icon: '🎯', label: 'Customer Focus', desc: 'Client success is our definition of success.' },
  { icon: '👥', label: 'Teamwork', desc: 'Collective expertise driving outstanding results.' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 relative overflow-hidden">
    <!-- Decorative circles -->
    <div class="absolute top-0 right-0 h-96 w-96 rounded-full border border-white/5 translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute top-0 right-0 h-64 w-64 rounded-full border border-white/5 translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2"></div>
    <div class="absolute inset-0 hero-pattern"></div>

    <div class="section-container relative z-10">
      <!-- Header -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
          Our Foundation
        </span>
        <h2 class="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Vision, Mission &
          <span class="text-gold-400"> Core Values</span>
        </h2>
      </div>

      <!-- Vision & Mission cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Vision -->
        <div
          :class="[
            'group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm transition-all duration-1000',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
          ]"
        >
          <div class="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-forest-400 to-gold-500 transition-all duration-500 rounded-t-2xl"></div>
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-600/50 border border-forest-400/30">
            <svg class="h-7 w-7 text-forest-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="font-display text-xl font-bold text-white mb-3">Our Vision</h3>
          <p class="text-white/70 leading-relaxed">
            To be the preferred provider of world-class engineering and construction solutions in Nigeria and beyond, recognized for our quality, reliability, and innovative spirit.
          </p>
          <div class="mt-6 h-px bg-gradient-to-r from-forest-400/30 to-transparent"></div>
        </div>

        <!-- Mission -->
        <div
          :class="[
            'group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
          ]"
        >
          <div class="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold-400 to-forest-400 transition-all duration-500 rounded-t-2xl"></div>
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-600/30 border border-gold-400/30">
            <svg class="h-7 w-7 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-display text-xl font-bold text-white mb-3">Our Mission</h3>
          <p class="text-white/70 leading-relaxed">
            To deliver innovative, efficient, and sustainable engineering solutions to our clients through the expertise of our people, adherence to global standards, and an unwavering commitment to excellence in execution.
          </p>
          <div class="mt-6 h-px bg-gradient-to-r from-gold-400/30 to-transparent"></div>
        </div>
      </div>

      <!-- Core Values -->
      <div
        :class="[
          'text-center mb-8 transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <h3 class="font-display text-2xl font-bold text-white">Core Values</h3>
        <div class="mx-auto mt-2 h-1 w-12 rounded-full bg-gold-500"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="(value, i) in coreValues"
          :key="value.label"
          :class="[
            'group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-5 text-center backdrop-blur-sm cursor-pointer transition-all duration-500 hover:bg-forest-700/50 hover:border-forest-400/50 hover:-translate-y-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          :style="`transition-delay: ${(i + 4) * 100}ms`"
        >
          <div class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{{ value.icon }}</div>
          <h4 class="font-semibold text-white text-sm mb-2">{{ value.label }}</h4>
          <p class="text-xs text-white/50 leading-relaxed">{{ value.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
