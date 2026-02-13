<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

const milestones = [
  { year: '1994', event: 'Founded as Klassmec Enterprises', icon: '🏢' },
  { year: '2002', event: 'Transitioned to Limited Liability Company', icon: '📋' },
  { year: '2010', event: 'Expanded into Oil & Gas sector', icon: '⚙️' },
  { year: '2016', event: 'Partnered with multinational clients', icon: '🌍' },
  { year: '2024', event: '30+ years of engineering excellence', icon: '🏆' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section id="about" ref="sectionRef" class="py-24 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-forest-50 opacity-60 translate-x-1/2 -translate-y-1/4 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold-50 opacity-50 -translate-x-1/2 translate-y-1/4 blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Images Collage -->
        <div
          :class="[
            'relative h-[520px] transition-all duration-1000',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
          ]"
        >
          <!-- Main image -->
          <div class="absolute top-0 left-0 h-72 w-64 rounded-2xl overflow-hidden shadow-2xl z-10">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
              alt="Construction site"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Secondary image -->
          <div class="absolute top-12 right-0 h-56 w-48 rounded-2xl overflow-hidden shadow-xl z-20">
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80"
              alt="Steel fabrication"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Bottom image -->
          <div class="absolute bottom-0 left-12 h-56 w-72 rounded-2xl overflow-hidden shadow-xl z-10">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
              alt="Industrial plant"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Floating badge -->
          <div class="absolute bottom-12 right-0 z-30 bg-white rounded-2xl p-4 shadow-xl border border-forest-100">
            <div class="flex items-center gap-3">
              <div class="h-12 w-12 rounded-xl bg-forest-700 flex items-center justify-center text-white font-display text-lg font-bold">
                30+
              </div>
              <div>
                <p class="text-xs text-slate-500">Years of</p>
                <p class="text-sm font-bold text-forest-800">Excellence</p>
              </div>
            </div>
          </div>
          <!-- Green accent bar -->
          <div class="absolute top-1/2 -left-4 h-24 w-2 rounded-full bg-gradient-to-b from-forest-700 to-gold-500 -translate-y-1/2"></div>
        </div>

        <!-- Right: Content -->
        <div
          :class="[
            'transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
          ]"
        >
          <span class="section-tag mb-4">About Us</span>
          <h2 class="section-title mb-2">
            Nigeria's Premier
            <span class="text-forest-700"> Engineering Partner</span>
          </h2>
          <div class="gold-divider my-5"></div>
          <p class="section-subtitle mb-4">
            Klassmec Technical Services Nigeria Limited is an indigenous engineering company with a proud heritage of excellence that began in <strong>November 1994</strong> as Klassmec Enterprises. In 2002, we transitioned into a Limited Liability Company.
          </p>
          <p class="section-subtitle mb-8">
            Over 30+ years, we've built a legacy of engineering precision, professional integrity, and customer satisfaction, serving as a trusted partner to organizations across Manufacturing, Oil & Gas, Real Estate, and Construction.
          </p>

          <!-- Core qualities -->
          <div class="grid grid-cols-2 gap-4 mb-10">
            <div
              v-for="(item, i) in [
                { icon: '⚙️', text: 'Technical Expertise' },
                { icon: '🔬', text: 'Innovation-Led' },
                { icon: '🤝', text: 'Client-First' },
                { icon: '🌍', text: 'Global Standards' },
              ]"
              :key="i"
              class="flex items-center gap-3 rounded-xl bg-forest-50 p-3 border border-forest-100"
            >
              <span class="text-xl">{{ item.icon }}</span>
              <span class="text-sm font-semibold text-forest-800">{{ item.text }}</span>
            </div>
          </div>

          <!-- Timeline -->
          <div class="space-y-3">
            <h3 class="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Our Journey</h3>
            <div
              v-for="(milestone, i) in milestones"
              :key="i"
              :class="[
                'flex items-center gap-4 group transition-all duration-300 delay-75',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ]"
              :style="`transition-delay: ${(i + 3) * 100}ms`"
            >
              <div class="flex-shrink-0 h-10 w-16 rounded-lg bg-forest-700 flex items-center justify-center text-gold-400 text-xs font-bold">
                {{ milestone.year }}
              </div>
              <div class="flex items-center gap-2 flex-1 rounded-lg bg-slate-50 px-3 py-2 border border-transparent group-hover:border-forest-200 group-hover:bg-forest-50 transition-all duration-200">
                <span>{{ milestone.icon }}</span>
                <span class="text-sm text-slate-700">{{ milestone.event }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
