<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
const activeProject = ref(0)

const projects = [
  {
    type: 'Major Project',
    typeColor: 'bg-forest-700 text-white',
    category: 'Extensions of Factory Plant',
    client: 'Beta Glass Plc',
    scope: 'Turnkey Factory Basement Construction',
    timeline: '7 Months',
    outcome: 'Installation of Piles, Civil works, Steel Fabrication and Installation',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Civil Works', 'Steel Fabrication', 'Piling', 'Turnkey'],
  },
  {
    type: 'Minor Project',
    typeColor: 'bg-gold-500 text-white',
    category: 'Construction of Storage Batch House',
    client: 'Beta Glass Plc',
    scope: 'Batch House Construction',
    timeline: '4 Months',
    outcome: 'Steel Fabricated Batch House with reinforced concrete floors and fittings',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    tags: ['Steel Fabrication', 'Concrete', 'Industrial'],
  },
  {
    type: 'Major Project',
    typeColor: 'bg-forest-700 text-white',
    category: 'Storage Tank Installation',
    client: 'Nipco Nigeria Plc',
    scope: 'Fabrication & Installation of Oil Storage Tanks',
    timeline: '5 Months',
    outcome: 'Three large-capacity oil storage tanks with full piping and instrumentation',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Tank Fabrication', 'Piping', 'Oil & Gas'],
  },
  {
    type: 'Major Project',
    typeColor: 'bg-forest-700 text-white',
    category: 'Industrial Warehouse Construction',
    client: 'GZ Industries Ltd',
    scope: 'Turnkey Warehouse Construction',
    timeline: '6 Months',
    outcome: 'Full structural steel warehouse with internal fittings, loading bay and security gates',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Warehouse', 'Structural Steel', 'Civil Works', 'Turnkey'],
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
  <section id="projects" ref="sectionRef" class="py-24 bg-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-forest-50/50 to-transparent pointer-events-none"></div>

    <div class="section-container relative z-10">
      <!-- Header -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="section-tag mb-4">Portfolio</span>
        <h2 class="section-title mb-4">
          Selected
          <span class="text-forest-700"> Projects</span>
        </h2>
        <div class="mx-auto gold-divider mb-4"></div>
        <p class="section-subtitle max-w-xl mx-auto">
          A showcase of our most impactful engineering projects — each one a testament to precision, reliability, and excellence.
        </p>
      </div>

      <!-- Project Selector Tabs -->
      <div
        :class="[
          'flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-200',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <button
          v-for="(project, i) in projects"
          :key="i"
          @click="activeProject = i"
          :class="[
            'flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300',
            activeProject === i
              ? 'bg-forest-700 text-white shadow-lg'
              : 'bg-slate-100 text-slate-600 hover:bg-forest-50 hover:text-forest-700',
          ]"
        >
          <span :class="`rounded-full px-2 py-0.5 text-xs ${project.typeColor}`">{{ project.type }}</span>
          {{ project.category }}
        </button>
      </div>

      <!-- Main Project Card -->
      <Transition name="project-fade" mode="out-in">
        <div
          :key="activeProject"
          :class="[
            'grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ]"
        >
          <!-- Image Side -->
          <div class="relative h-72 lg:h-auto min-h-[340px] overflow-hidden">
            <img
              :src="projects[activeProject].image"
              :alt="projects[activeProject].category"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent"></div>
            <!-- Floating type badge -->
            <div class="absolute top-6 left-6">
              <span :class="`rounded-full px-4 py-1.5 text-xs font-bold ${projects[activeProject].typeColor}`">
                {{ projects[activeProject].type }}
              </span>
            </div>
            <!-- Bottom overlay info -->
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="font-display text-2xl font-bold text-white mb-2">{{ projects[activeProject].category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in projects[activeProject].tags"
                  :key="tag"
                  class="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs text-white"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Info Side -->
          <div class="bg-white p-8 lg:p-10 flex flex-col justify-center">
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p class="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Client</p>
                <p class="font-bold text-slate-900">{{ projects[activeProject].client }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Timeline</p>
                <div class="flex items-center gap-2">
                  <svg class="h-4 w-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="font-bold text-slate-900">{{ projects[activeProject].timeline }}</p>
                </div>
              </div>
            </div>

            <div class="mb-6">
              <p class="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Project Scope</p>
              <p class="text-slate-700 font-medium">{{ projects[activeProject].scope }}</p>
            </div>

            <div class="mb-8">
              <p class="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Outcome</p>
              <div class="flex items-start gap-3 rounded-xl bg-forest-50 border border-forest-100 p-4">
                <span class="text-forest-700 mt-0.5">✅</span>
                <p class="text-sm text-slate-700 leading-relaxed">{{ projects[activeProject].outcome }}</p>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                @click="activeProject = activeProject > 0 ? activeProject - 1 : projects.length - 1"
                class="h-10 w-10 rounded-full border-2 border-forest-200 flex items-center justify-center text-forest-700 hover:bg-forest-700 hover:text-white hover:border-forest-700 transition-all duration-200"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span class="text-sm text-slate-500">{{ activeProject + 1 }} / {{ projects.length }}</span>
              <button
                @click="activeProject = (activeProject + 1) % projects.length"
                class="h-10 w-10 rounded-full border-2 border-forest-200 flex items-center justify-center text-forest-700 hover:bg-forest-700 hover:text-white hover:border-forest-700 transition-all duration-200"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Stats Row -->
      <div
        :class="[
          'grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <div
          v-for="stat in [
            { number: '50+', label: 'Projects Completed', icon: '🏗️' },
            { number: '30+', label: 'Years Experience', icon: '📅' },
            { number: '99%', label: 'On-Time Delivery', icon: '⏱️' },
            { number: '20+', label: 'Satisfied Clients', icon: '🤝' },
          ]"
          :key="stat.label"
          class="text-center rounded-2xl bg-forest-50 border border-forest-100 p-6 hover:bg-forest-700 hover:border-forest-700 group transition-all duration-300"
        >
          <div class="text-2xl mb-2">{{ stat.icon }}</div>
          <div class="font-display text-3xl font-bold text-forest-700 group-hover:text-white transition-colors duration-300">{{ stat.number }}</div>
          <div class="text-xs text-slate-500 group-hover:text-white/70 transition-colors duration-300 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-fade-enter-active,
.project-fade-leave-active {
  transition: all 0.5s ease;
}
.project-fade-enter-from,
.project-fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
