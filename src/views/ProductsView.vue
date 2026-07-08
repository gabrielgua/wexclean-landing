<script setup lang="ts">
import Section from '@/components/Section.vue';
import ProductLineBanner from '@/components/ProductLineBanner.vue';
import { Armchair, Bone, BrushCleaning, Car, Dog, Droplets, PawPrint, Shell, Sofa, Wind } from '@lucide/vue';

const lines = [
  {
    icon: Droplets,
    title: 'Linha Extratoras',
    tagline: 'Limpeza profissional',
    description: 'Fórmula de baixa espumação e poder de remoção pra extratoras de carpete e estofados. Sujeira profunda pra fora, sem deixar resíduo.',
    bgClass: 'bg-navy',
    textClass: 'text-cream',
    indications: [
      { label: 'Carpetes e tapetes', icon: Shell },
      { label: 'Estofados e sofás', icon: Sofa },
      { label: 'Bancos automotivos', icon: Car },
      { label: 'Uso doméstico e profissional', icon: BrushCleaning },
    ],
    sizes: ['500ml', '1L', '5L'],
    amazonUrl: 'https://www.amazon.com.br/s?k=wex+clean+extratora',
  },
  {
    icon: PawPrint,
    title: 'Linha Pet',
    tagline: 'Feito pra quem tem bichinho em casa',
    description: 'Higienização segura pra ambientes com pets. Elimina manchas e odores na fonte, sem agredir patinhas, focinhos ou o faro sensível dos animais.',
    bgClass: 'bg-green',
    textClass: 'text-navy-deep',
    indications: [
      { label: 'Manchas de xixi e fezes', icon: Dog },
      { label: 'Odor em caixas de areia e casinhas', icon: Wind },
      { label: 'Estofados, carpetes e pisos', icon: Armchair },
      { label: 'Ambientes com cães e gatos', icon: Bone },
    ],
    sizes: ['500ml', '1L'],
    amazonUrl: 'https://www.amazon.com.br/s?k=wex+clean+pet',
  },
];
</script>

<template>
  <div>
    <Section bg-color="bg-cream" text-color="text-navy" badge-bg-color="bg-navy" badge-text-color="text-cream"
      description-text-color="text-navy/70" centered>
      <template #badge>Nossas linhas</template>
      <template #title>Conheça os produtos WEX CLEAN</template>
      <template #description>
        Indicações e tamanhos disponíveis já aparecem em cada linha — clique em "Saiba mais" pra mais detalhes.
      </template>
    </Section>

    <ProductLineBanner v-for="line in lines" :key="line.title" v-bind="line" />
  </div>
</template>