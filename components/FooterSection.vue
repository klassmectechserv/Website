<script setup lang="ts">
const currentYear = new Date().getFullYear()

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-forest-950 text-white">
    <!-- Top Section -->
    <div class="section-container py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img src="~/assets/img/logo.png" alt="Klassmec" class="h-10 w-auto rounded-full" />
            <div>
              <p class="font-display text-sm font-bold text-white">Klassmec Technical Services</p>
              <p class="text-xs text-white/50">Nigeria Limited</p>
            </div>
          </div>
          <p class="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
            For over three decades, we have been delivering engineering excellence across Nigeria and beyond — from mechanical and structural works to civil construction and equipment leasing.
          </p>
          <p class="text-xs text-gold-400 italic font-medium">"Connoisseurs of Engineering Excellence"</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in ['home', 'about', 'services', 'industries', 'clients', 'projects', 'contact']" :key="link">
              <button
                @click="scrollTo(link)"
                class="text-sm text-white/60 hover:text-gold-400 transition-colors duration-200 capitalize flex items-center gap-2"
              >
                <svg class="h-3 w-3 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ link }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Contact</h4>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="text-gold-500 flex-shrink-0">📍</span>
              <span class="text-sm text-white/60 leading-relaxed">7 Oke-Anu Crescent, Km 32 off Lagos-Badagry Expressway, Morogbo, Lagos</span>
            </li>
            <li class="flex gap-3">
              <span class="text-gold-500 flex-shrink-0">📧</span>
              <a href="mailto:info@klassmec.com" class="text-sm text-white/60 hover:text-gold-400 transition-colors">info@klassmec.com</a>
            </li>
            <li class="flex gap-3">
              <span class="text-gold-500 flex-shrink-0">📞</span>
              <a href="tel:+2348037219893" class="text-sm text-white/60 hover:text-gold-400 transition-colors">+234 (0) 803 721 9893</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-white/40">
          © {{ currentYear }} Klassmec Technical Services Nigeria Limited. RC: 465809. All rights reserved.
        </p>
        <div class="flex items-center gap-2">
          <div class="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
          <p class="text-xs text-white/40">Engineering Excellence Since 1994</p>
        </div>
      </div>
    </div>
  </footer>
</template>
