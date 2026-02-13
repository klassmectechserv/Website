<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
import nipco from 'assets/img/clients/nipco.jpeg'
import aje from 'assets/img/clients/aje.avif'
import Perfetti from 'assets/img/clients/Perfetti.png'
import betaglass from 'assets/img/clients/betaglass.jpeg'
import hayat from 'assets/img/clients/hayat.jpeg'
import gzi from 'assets/img/clients/gzi.jpg'
import apin from 'assets/img/clients/apin.jpeg'
import frigoglass from 'assets/img/clients/Frigoglass.png'

const clients = [
  { name: 'Nipco Nigeria Plc', location: 'Apapa, Lagos State', logo: nipco, color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { name: 'AJEAST Nigeria Ltd', location: 'Agbara, Ogun State', logo: aje, color: 'bg-red-50 border-red-200 text-red-700', note: 'Sub-Saharan subsidiary of AJE Group' },
  { name: 'Perfetti Van Melle', location: 'Agbara, Ogun State', logo: Perfetti, color: 'bg-pink-50 border-pink-200 text-pink-700', note: 'Formally Fruits and Nutty' },
  { name: 'Beta Glass Plc', location: 'Guinea Plant, Agbara', logo: betaglass, color: 'bg-teal-50 border-teal-200 text-teal-700' },
  { name: 'Beta Glass Plc', location: 'Delta Plant, Ughelli', logo: betaglass, color: 'bg-teal-50 border-teal-200 text-teal-700' },
  { name: 'Hayat Kimya', location: 'Agbara, Ogun State', logo: hayat, color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { name: 'GZ Industries Ltd', location: 'Agbara, Ogun State', logo: gzi, color: 'bg-amber-50 border-amber-200 text-amber-700' },
  { name: 'APIN Nigeria', location: 'Public Health Initiatives', logo: apin, color: 'bg-green-50 border-green-200 text-green-700' },
  { name: 'Frigoglass', location: 'Nigeria', logo: frigoglass, color: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
]

const testimonials = [
  {
    quote: 'Klassmec delivered our factory basement project on time and within budget. Their technical expertise and professional team exceeded all expectations.',
    author: 'Operations Director',
    company: 'Beta Glass Plc',
    rating: 5,
  },
  {
    quote: 'The machinery installation and commissioning work was flawless. Klassmec\'s engineers are true professionals who understand industrial requirements.',
    author: 'Plant Manager',
    company: 'GZ Industries Ltd',
    rating: 5,
  },
  {
    quote: 'We have relied on Klassmec for over a decade for both structural work and equipment maintenance. They are our go-to engineering partner in Nigeria.',
    author: 'Engineering Director',
    company: 'Nipco Nigeria Plc',
    rating: 5,
  },
]

const currentTestimonial = ref(0)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  onUnmounted(() => observer.disconnect())

  const interval = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
  }, 5000)
  onUnmounted(() => clearInterval(interval))
})
</script>

<template>
  <section id="clients" ref="sectionRef" class="py-24 bg-slate-50 relative overflow-hidden">
    <div class="section-container">
      <!-- Header -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="section-tag mb-4">Trusted By</span>
        <h2 class="section-title mb-4">
          Our
          <span class="text-forest-700"> Clients</span>
        </h2>
        <div class="mx-auto gold-divider mb-4"></div>
        <p class="section-subtitle max-w-xl mx-auto">
          Partnering with industry leaders across Nigeria and West Africa to deliver engineering excellence.
        </p>
      </div>

      <!-- Client Cards Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
        <div
          v-for="(client, i) in clients"
          :key="i"
          :class="[
            'client-card',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <div :class="`h-12 w-12 rounded-xl ${client.color} border flex items-center justify-center text-2xl mb-3`">
            <img :src="client.logo" alt="" />
          </div>
          <h4 class="font-semibold text-slate-900 text-xs text-center leading-tight mb-1">{{ client.name }}</h4>
          <p class="text-xs text-slate-400 text-center leading-tight">{{ client.location }}</p>
          <p v-if="client.note" class="text-xs text-forest-600 text-center italic mt-1 leading-tight">{{ client.note }}</p>
        </div>
      </div>

      <!-- Ticker / Scrolling Logos -->
      <div
        :class="[
          'relative overflow-hidden mb-16 transition-all duration-700 delay-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        <div class="ticker-track py-3">
          <template v-for="_ in 2" :key="_">
            <div
              v-for="client in clients"
              :key="client.name"
              class="mx-6 flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 shadow-sm whitespace-nowrap"
            >
              <img :src="client.logo" alt="" class="h-12 w-12" />
              <span class="text-sm font-semibold text-slate-700">{{ client.name }}</span>
            </div>
          </template>
        </div>
      </div>

      <!-- Testimonials -->
      <div
        :class="[
          'transition-all duration-700 delay-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <h3 class="font-display text-xl font-bold text-center text-slate-800 mb-8">What Our Clients Say</h3>
        <div class="max-w-3xl mx-auto">
          <Transition name="testimonial-slide" mode="out-in">
            <div
              :key="currentTestimonial"
              class="relative bg-white rounded-3xl p-8 shadow-lg border border-forest-100"
            >
              <div class="absolute -top-4 left-8 h-8 w-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold">"</div>
              <div class="flex gap-1 mb-4">
                <svg v-for="s in testimonials[currentTestimonial].rating" :key="s" class="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="text-slate-700 text-lg leading-relaxed italic mb-6">
                "{{ testimonials[currentTestimonial].quote }}"
              </p>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-forest-700 flex items-center justify-center text-white font-bold text-sm">
                  {{ testimonials[currentTestimonial].author[0] }}
                </div>
                <div>
                  <p class="font-semibold text-slate-900 text-sm">{{ testimonials[currentTestimonial].author }}</p>
                  <p class="text-xs text-forest-700">{{ testimonials[currentTestimonial].company }}</p>
                </div>
              </div>
            </div>
          </Transition>

          <div class="flex justify-center gap-2 mt-6">
            <button
              v-for="(_, i) in testimonials"
              :key="i"
              @click="currentTestimonial = i"
              :class="[
                'rounded-full transition-all duration-300',
                currentTestimonial === i ? 'w-6 h-2 bg-forest-700' : 'w-2 h-2 bg-slate-300 hover:bg-forest-400',
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-slide-enter-active,
.testimonial-slide-leave-active {
  transition: all 0.5s ease;
}
.testimonial-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.testimonial-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
