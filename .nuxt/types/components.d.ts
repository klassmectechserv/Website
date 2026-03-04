
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AboutSection: typeof import("../../components/AboutSection.vue")['default']
  ClientsSection: typeof import("../../components/ClientsSection.vue")['default']
  ContactSection: typeof import("../../components/ContactSection.vue")['default']
  FooterSection: typeof import("../../components/FooterSection.vue")['default']
  GallerySection: typeof import("../../components/GallerySection.vue")['default']
  HeroSection: typeof import("../../components/HeroSection.vue")['default']
  IndustriesSection: typeof import("../../components/IndustriesSection.vue")['default']
  NavBar: typeof import("../../components/NavBar.vue")['default']
  ProjectsSection: typeof import("../../components/ProjectsSection.vue")['default']
  ScrollTopButton: typeof import("../../components/ScrollTopButton.vue")['default']
  ServicesSection: typeof import("../../components/ServicesSection.vue")['default']
  TeamSection: typeof import("../../components/TeamSection.vue")['default']
  VisionSection: typeof import("../../components/VisionSection.vue")['default']
  IconsIconBlueprint: typeof import("../../components/icons/IconBlueprint.vue")['default']
  IconsIconBlueprint2: typeof import("../../components/icons/IconBlueprint2.vue")['default']
  IconsIconCalendar: typeof import("../../components/icons/IconCalendar.vue")['default']
  IconsIconCheck: typeof import("../../components/icons/IconCheck.vue")['default']
  IconsIconClients: typeof import("../../components/icons/IconClients.vue")['default']
  IconsIconClock: typeof import("../../components/icons/IconClock.vue")['default']
  IconsIconConstruction: typeof import("../../components/icons/IconConstruction.vue")['default']
  IconsIconEmail: typeof import("../../components/icons/IconEmail.vue")['default']
  IconsIconExperience: typeof import("../../components/icons/IconExperience.vue")['default']
  IconsIconGlobe: typeof import("../../components/icons/IconGlobe.vue")['default']
  IconsIconHandshake: typeof import("../../components/icons/IconHandshake.vue")['default']
  IconsIconInfo: typeof import("../../components/icons/IconInfo.vue")['default']
  IconsIconLocation: typeof import("../../components/icons/IconLocation.vue")['default']
  IconsIconOnTime: typeof import("../../components/icons/IconOnTime.vue")['default']
  IconsIconPhone: typeof import("../../components/icons/IconPhone.vue")['default']
  IconsIconProject: typeof import("../../components/icons/IconProject.vue")['default']
  IconsIconSuccess: typeof import("../../components/icons/IconSuccess.vue")['default']
  IconsIconTimer: typeof import("../../components/icons/IconTimer.vue")['default']
  IconsIconUser: typeof import("../../components/icons/IconUser.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAboutSection: LazyComponent<typeof import("../../components/AboutSection.vue")['default']>
  LazyClientsSection: LazyComponent<typeof import("../../components/ClientsSection.vue")['default']>
  LazyContactSection: LazyComponent<typeof import("../../components/ContactSection.vue")['default']>
  LazyFooterSection: LazyComponent<typeof import("../../components/FooterSection.vue")['default']>
  LazyGallerySection: LazyComponent<typeof import("../../components/GallerySection.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/HeroSection.vue")['default']>
  LazyIndustriesSection: LazyComponent<typeof import("../../components/IndustriesSection.vue")['default']>
  LazyNavBar: LazyComponent<typeof import("../../components/NavBar.vue")['default']>
  LazyProjectsSection: LazyComponent<typeof import("../../components/ProjectsSection.vue")['default']>
  LazyScrollTopButton: LazyComponent<typeof import("../../components/ScrollTopButton.vue")['default']>
  LazyServicesSection: LazyComponent<typeof import("../../components/ServicesSection.vue")['default']>
  LazyTeamSection: LazyComponent<typeof import("../../components/TeamSection.vue")['default']>
  LazyVisionSection: LazyComponent<typeof import("../../components/VisionSection.vue")['default']>
  LazyIconsIconBlueprint: LazyComponent<typeof import("../../components/icons/IconBlueprint.vue")['default']>
  LazyIconsIconBlueprint2: LazyComponent<typeof import("../../components/icons/IconBlueprint2.vue")['default']>
  LazyIconsIconCalendar: LazyComponent<typeof import("../../components/icons/IconCalendar.vue")['default']>
  LazyIconsIconCheck: LazyComponent<typeof import("../../components/icons/IconCheck.vue")['default']>
  LazyIconsIconClients: LazyComponent<typeof import("../../components/icons/IconClients.vue")['default']>
  LazyIconsIconClock: LazyComponent<typeof import("../../components/icons/IconClock.vue")['default']>
  LazyIconsIconConstruction: LazyComponent<typeof import("../../components/icons/IconConstruction.vue")['default']>
  LazyIconsIconEmail: LazyComponent<typeof import("../../components/icons/IconEmail.vue")['default']>
  LazyIconsIconExperience: LazyComponent<typeof import("../../components/icons/IconExperience.vue")['default']>
  LazyIconsIconGlobe: LazyComponent<typeof import("../../components/icons/IconGlobe.vue")['default']>
  LazyIconsIconHandshake: LazyComponent<typeof import("../../components/icons/IconHandshake.vue")['default']>
  LazyIconsIconInfo: LazyComponent<typeof import("../../components/icons/IconInfo.vue")['default']>
  LazyIconsIconLocation: LazyComponent<typeof import("../../components/icons/IconLocation.vue")['default']>
  LazyIconsIconOnTime: LazyComponent<typeof import("../../components/icons/IconOnTime.vue")['default']>
  LazyIconsIconPhone: LazyComponent<typeof import("../../components/icons/IconPhone.vue")['default']>
  LazyIconsIconProject: LazyComponent<typeof import("../../components/icons/IconProject.vue")['default']>
  LazyIconsIconSuccess: LazyComponent<typeof import("../../components/icons/IconSuccess.vue")['default']>
  LazyIconsIconTimer: LazyComponent<typeof import("../../components/icons/IconTimer.vue")['default']>
  LazyIconsIconUser: LazyComponent<typeof import("../../components/icons/IconUser.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
