<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
import manufacturing from '@/assets/img/industries/manufacturing.jpg'
import oilandgas from '@/assets/img/industries/oilandgas.jpg'
import food from '@/assets/img/industries/food-breverage.jpg'
import packaging from '@/assets/img/industries/packaging.jpg'
import construction from '@/assets/img/industries/construction.jpg'
import nonProfit from '@/assets/img/industries/nonProfit.jpg'
import steel from '@/assets/img/industries/steel.jpg'

const industries = [
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'Plant maintenance, fabrication, and turnkey factory projects for manufacturers across Nigeria.',
    image: manufacturing,
  },
  {
    icon: '⛽',
    title: 'Oil & Gas',
    desc: 'Storage tank fabrication, piping, and structural works for upstream and downstream operations.',
    image: oilandgas,
  },
  {
    icon: '🍫',
    title: 'Food & Beverage',
    desc: 'Hygienic mechanical systems and facility construction for food and beverage producers.',
    image: food,
  },
  {
    icon: '📦',
    title: 'Packaging',
    desc: 'Machine installation, plant upgrades, and structural works for packaging facilities.',
    image: packaging,
  },
  {
    icon: '🏢',
    title: 'Real Estate & Construction',
    desc: 'Full-scope civil, structural, and architectural works for residential and commercial projects.',
    image: construction,
  },
  {
    icon: '🚛',
    title: 'Logistics & Warehousing',
    desc: 'Warehouse construction, loading bays, and storage infrastructure for logistics companies.',
    image: steel,
  },
  {
    icon: '🌐',
    title: 'Nonprofit & Development',
    desc: 'Infrastructure solutions for NGOs and public health initiatives across West Africa.',
    image: nonProfit,
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
  <section id="industries" ref="sectionRef" class="py-24 bg-white relative overflow-hidden">
    <div class="section-container">
      <!-- Header -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="section-tag mb-4">Sectors</span>
        <h2 class="section-title mb-4">
          Industries
          <span class="text-forest-700"> We Serve</span>
        </h2>
        <div class="mx-auto gold-divider mb-4"></div>
        <p class="section-subtitle max-w-xl mx-auto">
          Our expertise spans key sectors of Nigeria's economy, delivering specialized solutions that meet each industry's unique demands.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(industry, i) in industries"
          :key="industry.title"
          :class="[
            'service-card group overflow-hidden transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
          ]"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <!-- Image -->
          <div class="relative h-36 -mx-6 -mt-6 mb-5 overflow-hidden">
            <img
              :src="industry.image"
              :alt="industry.title"
              class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            <div class="absolute top-4 right-4 h-10 w-10 rounded-xl bg-white shadow-md flex items-center justify-center text-xl">
              {{ industry.icon }}
            </div>
          </div>

          <h3 class="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-forest-700 transition-colors duration-200">
            {{ industry.title }}
          </h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ industry.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
