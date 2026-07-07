<script setup lang="ts">
import Container from './Container.vue';


withDefaults(defineProps<{
  bgColor?: string,
  textColor?: string,
  badgeBgColor?: string,
  badgeTextColor?: string,
  descriptionTextColor?: string
}>(), {
  bgColor: 'bg-navy',
  textColor: 'text-cream',
  badgeBgColor: 'bg-gold',
  badgeTextColor: 'text-navy-deep',
  descriptionTextColor: 'text-blue-200'
})

</script>

<template>
  <section class="py-20 relative overflow-hidden" :class="[bgColor, textColor]">
    <slot name="background" />
    <Container class="space-y-6 relative">
      <div class="rounded-full w-max px-4 py-1.5 uppercase font-bold text-sm tracking-wider"
        :class="[badgeBgColor, badgeTextColor]">
        <slot name="badge" />
      </div>
      <h1 class="hero-title">
        <slot name="title" />
      </h1>
      <p class="text-lg leading-relaxed max-w-xl" :class="[descriptionTextColor]">
        <slot name="description" />
      </p>
      <slot name="content" />
    </Container>
  </section>
</template>


<style scoped>
.hero-title {
  font-size: clamp(40px, 6.4vw, 72px);
  color: var(--color-paper)
}
</style>