<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
import Icon from './Icon.vue';
import Button from '@/Button.vue';

defineProps<{
  image: string,
  title: string,
  description: string,
  amazonUrl: string,
}>()
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-2xl border-[3px] border-navy bg-white transition-transform duration-200">
    <div class="aspect-square bg-white p-6">
      <img :src="image" :alt="title" class="h-full w-full object-contain" loading="lazy" />
    </div>

    <hr class="mx-5 border-blue/10">
    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-display text-2xl uppercase leading-tight! tracking-wide text-navy">{{ title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-navy/70">{{ description }}</p>

      <Button class="mt-4 justify-center">
        <Icon :icon="ExternalLink" fill="var(--color-paper)" />
        Comprar na Amazon
      </Button>
    </div>
  </div>
</template>