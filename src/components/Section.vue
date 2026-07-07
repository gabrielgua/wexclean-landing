<script setup lang="ts">
import Container from './Container.vue';


withDefaults(defineProps<{
  bgColor?: string,
  textColor?: string,
  badgeBgColor?: string,
  badgeTextColor?: string,
  descriptionTextColor?: string,
  centered?: boolean
}>(), {
  bgColor: 'bg-navy',
  textColor: 'text-cream',
  badgeBgColor: 'bg-gold',
  badgeTextColor: 'text-navy-deep',
  descriptionTextColor: 'text-blue-200',
  centered: false
})

</script>

<template>
  <section class="py-20 relative overflow-hidden" :class="[bgColor, textColor]">
    <slot name="background" />
    <Container class="space-y-6 relative" :class="{ 'text-center': centered }">
      <div v-if="$slots['badge']" class="rounded-full w-max px-4 py-1.5 uppercase font-bold text-sm tracking-wider"
        :class="[badgeBgColor, badgeTextColor]">
        <slot name="badge" />
      </div>
      <h1 class="section-title" :class="[textColor]">
        <slot name="title" />
      </h1>
      <p class="text-lg leading-relaxed"
        :class="[descriptionTextColor, centered ? 'text-center max-w-none' : 'max-w-xl']">
        <slot name="description" />
      </p>
      <slot name="content" />
    </Container>
  </section>
</template>


<style scoped>
.section-title {
  font-size: clamp(30px, 4.4vw, 46px)
}
</style>