<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Clients', href: '#clients' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
    // Update active section
    const sections = ['home', 'about', 'services', 'industries', 'clients', 'projects', 'contact']
    for (const section of sections.reverse()) {
      const el = document.getElementById(section)
      if (el && window.scrollY >= el.offsetTop - 100) {
        activeSection.value = section
        break
      }
    }
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const scrollTo = (href: string) => {
  isMobileMenuOpen.value = false
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-forest-100'
        : 'bg-transparent',
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <a
          href="#home"
          @click.prevent="scrollTo('#home')"
          class="flex items-center gap-3 group"
        >
          <img src="~/assets/img/logo.png" alt="Klassmec" class="h-12 w-auto" />
        </a>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            :class="[
              'nav-link',
              isScrolled ? 'text-slate-700 hover:text-forest-700' : 'text-white/90 hover:text-white',
              activeSection === link.href.replace('#', '') ? 'active' : '',
            ]"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center gap-3">
          <a href="#contact" @click.prevent="scrollTo('#contact')" class="btn-gold text-xs px-4 py-2">
            Get a Quote
            <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :class="[
            'lg:hidden rounded-md p-2 transition-colors duration-200',
            isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10',
          ]"
        >
          <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="isMobileMenuOpen"
        class="lg:hidden bg-white border-t border-slate-100 shadow-xl"
      >
        <div class="section-container py-4 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-700 transition-colors duration-200"
          >
            {{ link.label }}
          </a>
          <div class="pt-2 border-t border-slate-100 mt-2">
            <a
              href="#contact"
              @click.prevent="scrollTo('#contact')"
              class="btn-primary w-full justify-center text-xs"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
