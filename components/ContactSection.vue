<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})
const isSubmitted = ref(false)
const isSubmitting = ref(false)

const services = [
  'Mechanical Engineering',
  'Structural Steel Fabrication',
  'Civil Engineering',
  'Machinery & Equipment Leasing',
  'General Consultation',
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Construct email body
  const subject = `New Contact Request: ${form.service || 'General Inquiry'}`
  const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service Needed: ${form.service}

Message:
${form.message}
  `.trim()

  // Create mailto link
  const mailtoLink = `mailto:klassmectechserv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  
  // Open email client
  window.location.href = mailtoLink

  // Show simulated success state
  await new Promise((r) => setTimeout(r, 1000))
  isSubmitting.value = false
  isSubmitted.value = true
}

const contactInfo = [
  {
    icon: '📍',
    label: 'Office Address',
    value: '7 Oke-Anu Crescent, Km 32 off Lagos-Badagry Expressway, Morogbo, Lagos',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'info@klassmec.com\nklassmectechserv@gmail.com',
    link: 'mailto:info@klassmec.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+234 (0) 803 721 9893\n+234 (0) 802 563 8422\n+234 (0) 803 334 2262',
  },
  {
    icon: '🌐',
    label: 'Website',
    value: 'www.klassmec.com',
    link: 'https://www.klassmec.com',
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
  <section id="contact" ref="sectionRef" class="py-24 bg-slate-50 relative overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-forest-100/60 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-100/60 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="section-container relative z-10">
      <!-- Header -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="section-tag mb-4">Let's Talk</span>
        <h2 class="section-title mb-4">
          Partner With
          <span class="text-forest-700"> Klassmec</span>
        </h2>
        <div class="mx-auto gold-divider mb-4"></div>
        <p class="section-subtitle max-w-xl mx-auto">
          Ready to start your next project? Contact us today for a consultation or to request a quote. We engineer confidence.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div
          :class="[
            'bg-white rounded-3xl shadow-xl p-8 border border-slate-100 transition-all duration-1000',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
          ]"
        >
          <Transition name="form-fade" mode="out-in">
            <div v-if="!isSubmitted" key="form">
              <h3 class="font-display text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">Full Name *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="John Doe"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">Email *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">Phone Number</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      placeholder="+234 xxx xxx xxxx"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">Service Needed</label>
                    <select
                      v-model="form.service"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/20 transition-all duration-200"
                    >
                      <option value="">Select a service...</option>
                      <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">Project Details *</label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                    class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/20 transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary w-full justify-center text-sm py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting" class="flex items-center gap-2">
                    <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </span>
                  <span v-else>Send Message</span>
                  <svg v-if="!isSubmitting" class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            <div v-else key="success" class="flex flex-col items-center justify-center py-16 text-center">
              <div class="h-20 w-20 rounded-full bg-forest-100 flex items-center justify-center text-4xl mb-6 animate-bounce">
                ✅
              </div>
              <h3 class="font-display text-2xl font-bold text-forest-800 mb-3">Message Sent!</h3>
              <p class="text-slate-500 max-w-sm">Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.</p>
              <button
                @click="isSubmitted = false"
                class="mt-6 text-sm font-semibold text-forest-700 hover:text-forest-600 underline"
              >
                Send another message
              </button>
            </div>
          </Transition>
        </div>

        <!-- Contact Info -->
        <div
          :class="[
            'flex flex-col gap-6 transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
          ]"
        >
          <div class="bg-gradient-to-br from-forest-900 to-forest-700 rounded-3xl p-8 text-white">
            <h3 class="font-display text-2xl font-bold mb-2">Get in Touch</h3>
            <p class="text-white/70 text-sm mb-8">Reach us through any of these channels. We're ready to partner with you.</p>

            <div class="space-y-6">
              <div
                v-for="info in contactInfo"
                :key="info.label"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  {{ info.icon }}
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-1">{{ info.label }}</p>
                  <a
                    v-if="info.link"
                    :href="info.link"
                    class="text-sm text-white/80 hover:text-white whitespace-pre-line transition-colors duration-200"
                  >{{ info.value }}</a>
                  <p v-else class="text-sm text-white/80 whitespace-pre-line">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- RC Number + CTA -->
          <div class="bg-white rounded-3xl p-6 shadow-md border border-slate-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex items-center gap-1">
                <span class="flex h-7 w-7 items-center justify-center rounded-md bg-forest-700 text-white text-xs font-bold">K</span>
                <span class="flex h-7 w-7 items-center justify-center rounded-md bg-gold-500 text-white text-xs font-bold">T</span>
                <span class="flex h-7 w-7 items-center justify-center rounded-md bg-forest-700 text-white text-xs font-bold">S</span>
              </div>
              <div>
                <p class="text-xs font-bold text-forest-800">KLASSMEC TECHNICAL SERVICES</p>
                <p class="text-xs text-slate-500">NIGERIA LIMITED | RC: 465809</p>
              </div>
            </div>
            <p class="text-xs text-slate-500 italic mb-4">"Connoisseurs of Engineering Excellence"</p>
            <div class="flex gap-3">
              <a href="mailto:info@klassmec.com" class="btn-primary text-xs px-4 py-2 flex-1 justify-center">
                Email Us
              </a>
              <a href="tel:+2348037219893" class="btn-secondary text-xs px-4 py-2 flex-1 justify-center">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 0.4s ease;
}
.form-fade-enter-from,
.form-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
