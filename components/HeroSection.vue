<script setup lang="ts">
const currentSlide = ref(0)

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
    tag: 'Engineering Excellence',
    title: 'We Build the<br>Infrastructure of<br>Tomorrow',
    subtitle: 'Over two decades of mechanical, structural, and civil engineering expertise across Nigeria\'s industrial landscape.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80',
    tag: 'Structural Steel',
    title: 'Precision Fabrication,<br>Unmatched<br>Quality',
    subtitle: 'From piping to heavy structural steel, we deliver projects that stand the test of time.',
  },
  {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2400&q=80',
    tag: 'Civil Engineering',
    title: 'Foundations You<br>Can Build Your<br>Future On',
    subtitle: 'Turnkey construction, factory builds, roads and drainage — all under one roof.',
  },
]

const stats = [
  { value: '30+', label: 'Years of Experience', icon: '🏗️' },
  { value: '50+', label: 'Major Projects', icon: '📐' },
  { value: '20+', label: 'Multinational Clients', icon: '🤝' },
  { value: '100%', label: 'Commitment to Quality', icon: '✅' },
]

let autoplayInterval: ReturnType<typeof setInterval>

onMounted(() => {
  autoplayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative h-screen min-h-[600px] overflow-hidden">
    <!-- Slides -->
    <div class="absolute inset-0">
      <TransitionGroup name="hero-slide">
        <div
          v-for="(slide, index) in heroSlides"
          v-show="currentSlide === index"
          :key="index"
          class="absolute inset-0"
        >
          <img
            :src="slide.image"
            :alt="slide.tag"
            class="h-full w-full object-cover"
          />
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent"></div>
          <!-- Pattern -->
          <div class="absolute inset-0 hero-pattern opacity-40"></div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex h-full flex-col justify-center section-container pt-20">
      <div class="max-w-3xl">
        <!-- Tag -->
        <Transition name="content-fade" mode="out-in">
          <div :key="`tag-${currentSlide}`" class="mb-4">
            <span class="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-500/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
              <span class="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              {{ heroSlides[currentSlide].tag }}
            </span>
          </div>
        </Transition>

        <!-- Title -->
        <Transition name="content-fade" mode="out-in">
          <h1
            :key="`title-${currentSlide}`"
            class="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl mb-6"
            v-html="heroSlides[currentSlide].title"
          ></h1>
        </Transition>

        <!-- Subtitle -->
        <Transition name="content-fade" mode="out-in">
          <p
            :key="`sub-${currentSlide}`"
            class="text-lg text-white/75 max-w-lg mb-8 leading-relaxed"
          >
            {{ heroSlides[currentSlide].subtitle }}
          </p>
        </Transition>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 mb-12">
          <a href="#services" @click.prevent="() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })" class="btn-gold">
            Explore Services
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" @click.prevent="() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })" class="btn-secondary border-white text-white hover:bg-white hover:text-forest-800">
            Get a Free Quote
          </a>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stat-card"
        >
          <div class="text-xl mb-1">{{ stat.icon }}</div>
          <div class="font-display text-2xl font-bold text-gold-400">{{ stat.value }}</div>
          <div class="text-xs text-white/60 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Slide Controls -->
    <div class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
      <button
        v-for="(_, index) in heroSlides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'transition-all duration-300 rounded-full',
          currentSlide === index
            ? 'w-8 h-2.5 bg-gold-400'
            : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70',
        ]"
      />
    </div>

    <!-- Scroll Down Indicator -->
    <button
      @click="scrollToAbout"
      class="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors duration-200"
    >
      <span class="text-xs tracking-widest uppercase" style="writing-mode: vertical-rl">Scroll</span>
      <svg class="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </section>
</template>

<style scoped>
.hero-slide-enter-active,
.hero-slide-leave-active {
  transition: opacity 1s ease;
}
.hero-slide-enter-from,
.hero-slide-leave-to {
  opacity: 0;
}

.content-fade-enter-active {
  transition: all 0.6s ease;
  transition-delay: 0.2s;
}
.content-fade-leave-active {
  transition: all 0.3s ease;
}
.content-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.content-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
