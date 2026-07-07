<script setup lang="ts">
import Section from '@/components/Section.vue';
import ProductCard from '@/components/ProductCard.vue';

const products = [
  {
    image: '../images/limpa-extrai-1l.png',
    title: 'WEX CLEAN Detergente Concentrado para Extratoras Limpa & Extrai 1L',
    description: 'Fórmula de alta espuma para extratoras de carpete e estofados. Remove sujeira profunda sem deixar resíduo.',
    amazonUrl: 'https://www.amazon.com.br/s?k=wex+clean+extratora+pro',
  },
  {
    image: '/products/piso-performance-1l.jpg',
    title: 'WEX CLEAN Piso Performance 1L',
    description: 'Limpa e perfuma pisos frios, cerâmicos ou de alto tráfego, sem deixar película pegajosa.',
    amazonUrl: 'https://www.amazon.com.br/s?k=wex+clean+piso+performance',
  }
];
</script>

<template>
  <Section bg-color="bg-cream" text-color="text-navy" badge-bg-color="bg-navy" badge-text-color="text-cream"
    description-text-color="text-navy/70">
    <template #badge>Linha Wex Clean</template>
    <template #title>Confira nossa linha de produtos</template>
    <template #description>
      Toda a linha WEX CLEAN disponível na <strong>Amazon</strong> e <strong>Mercado Livre</strong> com entrega rápida e
      a garantia de
      quem compra online.
    </template>
    <template #content>
      <div class="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard v-for="product in products" :key="product.title" v-bind="product" />
      </div>
    </template>
  </Section>
</template>