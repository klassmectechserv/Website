<script setup lang="ts">
useHead({
  title: 'Klassmec Technical Services Nigeria Limited – Engineering Excellence',
  meta: [
    {
      name: 'description',
      content:
        'Klassmec Technical Services Nigeria Limited – Over 30 years of mechanical, structural, and civil engineering excellence. Serving multinationals across Nigeria.',
    },
  ],
})

// Structured data can be added via useSchemaOrg if needed
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavBar />

    <!-- Page Sections -->
    <main>
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Scroll to Top Button -->
    <ScrollTopButton />
  </div>
</template>
