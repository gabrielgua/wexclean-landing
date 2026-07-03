<script setup lang="ts">
import Button from '@/Button.vue';
import Container from './Container.vue';

</script>

<template>
  <section class="py-20 bg-navy text-cream relative overflow-hidden">
    <svg class="absolute inset-0 pointer-events-none" viewBox="0 0 1180 620" preserveAspectRatio="none">
      <ellipse cx="900" cy="180" rx="420" ry="420" stroke="#3FBFEF" stroke-width="10" fill="none" opacity="0.18" />
      <ellipse cx="950" cy="220" rx="330" ry="330" stroke="#7ED321" stroke-width="8" fill="none" opacity="0.14" />
      <ellipse cx="870" cy="150" rx="230" ry="230" stroke="#1477C4" stroke-width="7" fill="none" opacity="0.22" />
    </svg>
    <Container class="space-y-6 relative">
      <div class="rounded-full bg-gold text-navy-deep w-max px-4 py-1.5 uppercase font-bold text-sm tracking-wider">
        Linha profissional de limpeza
      </div>
      <h1 class="hero-title">
        Limpeza que você <br> <span class="text-green">vê</span>. <br>
        Resultado que você sente.
      </h1>
      <p class="text-lg text-blue-200 leading-relaxed max-w-xl">
        A WEX CLEAN reúne produtos de alta performance pra limpeza pesada — de extratoras a pisos, gordura, pet e
        manchas. Poder profissional, no dia a dia da sua casa ou do seu negócio.
      </p>

      <div class="flex items-center gap-4">
        <Button class="px-10">Ver produtos</Button>
        <Button class="px-10" bg-color="bg-navy" text-color="text-white" shadow-color="shadow-white"
          border-color="border-white">
          Fale Conosco
        </Button>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(40px, 6.4vw, 72px);
  color: var(--color-paper)
}
</style>