<script setup lang="ts">
import Button from '@/components/Button.vue';
import Section from './Section.vue';
import Icon from './Icon.vue';
import { MessageCircle, MoveRight } from '@lucide/vue';

</script>

<template>
  <Section>
    <template #background>
      <svg class="absolute inset-0 pointer-events-none" viewBox="0 0 1180 620" preserveAspectRatio="none">
        <ellipse cx="900" cy="180" rx="420" ry="420" stroke="#3FBFEF" stroke-width="10" fill="none" opacity="0.18" />
        <ellipse cx="950" cy="220" rx="330" ry="330" stroke="#7ED321" stroke-width="8" fill="none" opacity="0.14" />
        <ellipse cx="870" cy="150" rx="230" ry="230" stroke="#1477C4" stroke-width="7" fill="none" opacity="0.22" />
      </svg>
    </template>
    <template #badge>
      Linha profissional de limpeza
    </template>
    <template #title>
      <span class="hero-title">
        Limpeza que você <br> <span class="text-green">vê</span>. <br>
        Resultado que você sente.
      </span>
    </template>
    <template #description>
      A WEX CLEAN reúne produtos de alta performance pra limpeza pesada — de extratoras a pisos, gordura, pet e
      manchas. Poder profissional, no dia a dia da sua casa ou do seu negócio.
    </template>
    <template #content>
      <div class="flex items-center gap-4">
        <RouterLink to="/products">
          <Button class="px-10">
            Ver produtos
            <Icon :icon="MoveRight" />
          </Button>
        </RouterLink>
        <Button class="px-10" bg-color="bg-navy" text-color="text-white" shadow-color="shadow-white"
          border-color="border-white">
          <Icon :icon="MessageCircle" />
          Fale Conosco
        </Button>
      </div>
    </template>
  </Section>
</template>

<style>
.hero-title {
  font-size: clamp(40px, 6.4vw, 72px);
}
</style>
