<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
const activeTab = ref(0)

const services = [
  {
    id: 0,
    icon: '⚙️',
    title: 'Mechanical Engineering',
    color: 'from-forest-700 to-forest-600',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
    tagline: 'Precision. Performance. Reliability.',
    items: [
      'Design, Fabrication & Installation of Mechanical Systems',
      'General Plant Maintenance, Overhauls & Upgrades',
      'Bulk Material Handling Systems for Manufacturing Plants',
      'Industrial Machines Installation, Testing & Commissioning',
      'Precision Alignment & Calibration Services',
      'Conveyor Belt Installations',
      'Installation and Maintenance of Rotating & Static Equipment',
    ],
  },
  {
    id: 1,
    icon: '🔩',
    title: 'Structural Steel Fabrication',
    color: 'from-gold-600 to-gold-500',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tagline: 'Built to last. Engineered to impress.',
    items: [
      'Piping & Welding – Arc, MIG, MAG and T.I.G',
      'Foundations & Piling Works',
      'Factory Floors & External Concrete Paving',
      'Fabrication & Installation of Storage Tanks (Oil, Gas, Water)',
      'Repair & Maintenance of Existing Tanks',
      'Heavy & Light Structural Fabrication and Customized Metal Works',
      'Pipe Racks, Equipment Supports & Platforms',
      'Fabrication of Steel & Heavy Metal Security Doors',
    ],
  },
  {
    id: 2,
    icon: '🏗️',
    title: 'Civil Engineering',
    color: 'from-forest-700 to-gold-600',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
    tagline: 'From ground up. Done right.',
    items: [
      'Foundations & Piling Works',
      'Construction of Roads, Drainages & Culverts',
      'Factory Flooring & External Concrete Flooring & Paving',
      'Residential, Commercial & Industrial Building Projects',
      'Security Gates & Fencing',
      'Turnkey Construction Projects: Warehouse & Factory Construction',
      'Full-scope Civil, Structural & Architectural Works',
    ],
  },
  {
    id: 3,
    icon: '🚜',
    title: 'Machinery & Equipment Leasing',
    color: 'from-gold-600 to-forest-600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tagline: 'The right equipment, right when you need it.',
    items: [
      'Mobile Generators for construction & industrial sites',
      'Air Compressors for varied industrial applications',
      'Concrete Mixers for on-site use',
      'Flexible short & long-term leasing arrangements',
      'Operator-included packages available',
      'Prompt delivery and on-site support',
    ],
  },
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
  <section id="services" ref="sectionRef" class="py-24 bg-slate-50 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

    <div class="section-container relative z-10">
      <!-- Header -->
      <div
        :class="[
          'text-center mb-12 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="section-tag mb-4">What We Do</span>
        <h2 class="section-title mb-4">
          Our
          <span class="text-forest-700"> Services</span>
        </h2>
        <div class="mx-auto gold-divider mb-4"></div>
        <p class="section-subtitle max-w-2xl mx-auto">
          Comprehensive engineering solutions spanning mechanical, structural, civil disciplines and equipment leasing — all under one trusted partner.
        </p>
      </div>

      <!-- Tab Selector -->
      <div
        :class="[
          'flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <button
          v-for="service in services"
          :key="service.id"
          @click="activeTab = service.id"
          :class="[
            'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
            activeTab === service.id
              ? 'bg-forest-700 text-white shadow-lg shadow-forest-700/30'
              : 'bg-white text-slate-600 hover:bg-forest-50 hover:text-forest-700 border border-slate-200',
          ]"
        >
          <span>{{ service.icon }}</span>
          <span class="hidden sm:inline">{{ service.title }}</span>
        </button>
      </div>

      <!-- Active Service Panel -->
      <div
        :class="[
          'grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <!-- Image -->
        <div class="relative overflow-hidden rounded-3xl shadow-2xl h-[420px]">
          <TransitionGroup name="service-img">
            <img
              v-for="service in services"
              v-show="activeTab === service.id"
              :key="service.id"
              :src="service.image"
              :alt="service.title"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </TransitionGroup>
          <div :class="`absolute inset-0 bg-gradient-to-t ${services[activeTab].color} opacity-50`"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <p class="font-display text-2xl font-bold text-white mb-1">{{ services[activeTab].title }}</p>
            <p class="text-white/80 text-sm italic">{{ services[activeTab].tagline }}</p>
          </div>
        </div>

        <!-- Items List -->
        <div class="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
          <div class="flex items-center gap-3 mb-6">
            <div :class="`h-12 w-12 rounded-xl bg-gradient-to-br ${services[activeTab].color} flex items-center justify-center text-2xl`">
              {{ services[activeTab].icon }}
            </div>
            <div>
              <h3 class="font-display text-xl font-bold text-slate-900">{{ services[activeTab].title }}</h3>
              <p class="text-xs text-slate-400">{{ services[activeTab].items.length }} specialized services</p>
            </div>
          </div>

          <ul class="space-y-3">
            <li
              v-for="(item, i) in services[activeTab].items"
              :key="i"
              class="flex items-start gap-3 group"
            >
              <span class="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-forest-100 flex items-center justify-center">
                <svg class="h-3 w-3 text-forest-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="text-sm text-slate-600 group-hover:text-forest-700 transition-colors duration-200">{{ item }}</span>
            </li>
          </ul>

          <div class="mt-6 pt-6 border-t border-slate-100">
            <a href="#contact" @click.prevent="() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })" class="btn-primary w-full justify-center">
              Request This Service
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-img-enter-active,
.service-img-leave-active {
  transition: opacity 0.4s ease;
}
.service-img-enter-from,
.service-img-leave-to {
  opacity: 0;
}
</style>
