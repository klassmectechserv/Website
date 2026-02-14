<script setup lang="ts">
import { ref } from 'vue'

interface Work {
  id: number
  image: string
  title: string
  description: string
}

const descriptions = [
  "Structural Steel Fabrication for Industrial Warehouse",
  "Mechanical Piping Installation for Oil & Gas Facility",
  "Pressure Vessel Inspection and Certification",
  "Heavy Duty Equipment Maintenance and Calibration",
  "Civil Construction of Concrete Pier Foundations",
  "On-site Welding and Structural Integrity testing",
  "Equipment Leasing for Major Infrastructure Project",
  "Precision Engineering of Mechanical Components",
  "Pipeline Maintenance and Integrity Assessment",
  "Industrial Machine Installation and Commissioning"
]

const works = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  image: `/img/works/work-${i + 1}.jpg`,
  title: `Project 0${(i % 10) + 1}`,
  description: descriptions[i % descriptions.length]
}))

const row1 = works.slice(0, 20)
const row2 = works.slice(20, 40)

const isModalOpen = ref(false)
const selectedWork = ref<Work | null>(null)

const openModal = (work: Work) => {
  selectedWork.value = work
  isModalOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedWork.value = null
  }, 300)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <section id="gallery" class="py-24 bg-forest-950 overflow-hidden">
    <div class="section-container mb-16">
      <div class="text-center">
        <span class="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4 text-center">
          Visual Showcase
        </span>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-6">Our Work in Action</h2>
        <p class="text-white/60 max-w-2xl mx-auto text-lg">
          A glimpse into the engineering excellence and precision we bring to every project across Nigeria.
        </p>
      </div>
    </div>

    <!-- Carousel Containers -->
    <div class="space-y-8">
      <!-- Row 1: Left to Right -->
      <div class="flex marquee-container">
        <div class="flex marquee-content marquee-ltr">
          <div 
            v-for="(work, idx) in [...row1, ...row1]" 
            :key="`row1-${work.id}-${idx}`"
            class="gallery-card group"
            @click="openModal(work)"
          >
            <div class="relative overflow-hidden rounded-xl aspect-[4/3] w-[300px] md:w-[400px]">
              <img :src="work.image" :alt="work.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p class="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1">{{ work.title }}</p>
                <p class="text-white text-sm line-clamp-1">{{ work.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: Right to Left -->
      <div class="flex marquee-container">
        <div class="flex marquee-content marquee-rtl">
          <div 
            v-for="(work, idx) in [...row2, ...row2]" 
            :key="`row2-${work.id}-${idx}`"
            class="gallery-card group"
            @click="openModal(work)"
          >
            <div class="relative overflow-hidden rounded-xl aspect-[4/3] w-[300px] md:w-[400px]">
              <img :src="work.image" :alt="work.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p class="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1">{{ work.title }}</p>
                <p class="text-white text-sm line-clamp-1">{{ work.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <div class="absolute inset-0 bg-forest-950/95 backdrop-blur-sm" @click="closeModal"></div>
        <div class="relative w-full max-w-5xl bg-forest-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">
          <button @click="closeModal" class="absolute top-4 right-4 z-10 p-2 rounded-full bg-forest-950/50 text-white hover:bg-gold-500 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="w-full md:w-2/3 aspect-video md:aspect-auto">
            <img :src="selectedWork?.image" :alt="selectedWork?.title" class="w-full h-full object-cover" />
          </div>
          
          <div class="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-forest-900 text-left">
            <span class="text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">— Project Feature</span>
            <h3 class="font-display text-3xl font-bold text-white mb-6">{{ selectedWork?.title }}</h3>
            <p class="text-white/70 text-lg leading-relaxed mb-8">
              {{ selectedWork?.description }}
            </p>
            <div class="space-y-4 pt-8 border-t border-white/10">
              <div class="flex items-center gap-4 text-white/60">
                <span class="p-2 rounded bg-white/5">🏗️</span>
                <span class="text-sm">Engineering Excellence</span>
              </div>
              <div class="flex items-center gap-4 text-white/60">
                <span class="p-2 rounded bg-white/5">✅</span>
                <span class="text-sm">Safety Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.marquee-container {
  overflow: hidden;
  user-select: none;
}

.marquee-content {
  display: flex;
  gap: 2rem;
  width: max-content;
}

.gallery-card {
  cursor: pointer;
  flex-shrink: 0;
}

.marquee-ltr {
  animation: ltr 120s linear infinite;
}

.marquee-rtl {
  animation: rtl 120s linear infinite;
}

.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

@keyframes ltr {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 1rem)); }
}

@keyframes rtl {
  0% { transform: translateX(calc(-50% - 1rem)); }
  100% { transform: translateX(0); }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative {
  animation: modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes modal-in {
  from { transform: scale(0.9) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .marquee-ltr, .marquee-rtl {
    animation-duration: 60s;
  }
}
</style>
