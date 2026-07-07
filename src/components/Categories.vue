<script setup lang="ts">
import { Droplets, Flame, PawPrint, Sparkles, Wind } from '@lucide/vue';
import CategoryCard from './CategoryCard.vue';
import Icon from './Icon.vue';
import Section from './Section.vue';

</script>

<template>
  <Section bg-color="bg-paper" text-color="text-navy" badge-bg-color="bg-navy" badge-text-color="text-white"
    description-text-color="text-navy/80">
    <template #badge>Linha Wex Clean</template>
    <template #title>Poder profissional pra cada <br> tipo de limpeza</template>
    <template #description>
      Fórmulas de alta performance, pensadas pra quem exige resultado de verdade — em casa ou no
      dia a dia do trabalho.
    </template>
    <template #content>
      <div class="grid grid-columns gap-6">
        <CategoryCard swatch-bg-color="bg-blue" tag-bg-color="bg-navy/20">
          <template #icon>
            <Icon :icon="Droplets" />
          </template>
          <template #title>Limpador para Extratoras</template>
          <template #description>
            Fórmula de alta espuma e poder de remoção pra extratoras de carpete e estofados. Sujeira profunda pra fora,
            sem deixar resíduo.
          </template>
          <template #tag>Extratoras</template>
        </CategoryCard>
        <CategoryCard swatch-bg-color="bg-blue/20" tag-bg-color="bg-blue/50" shadow-color="shadow-blue">
          <template #icon>
            <Icon :icon="Sparkles" />
          </template>
          <template #title>Limpador de Pisos</template>
          <template #description>Limpa, perfuma e não deixa película pegajosa. Rende mais em pisos frios, cerâmicos ou
            de alto tráfego.
          </template>
          <template #tag>Pisos</template>
        </CategoryCard>
        <CategoryCard swatch-bg-color="bg-gold/20" tag-bg-color="bg-gold/50" shadow-color="shadow-gold">
          <template #icon>
            <Icon :icon="Flame" />
          </template>
          <template #title>Limpador de Gorduras</template>
          <template #description>
            Ataque pesado contra gordura de cozinha, coifa e superfícies industriais. Aplica,
            espera e sai limpando fácil.
          </template>
          <template #tag>Cozinha</template>
        </CategoryCard>
        <CategoryCard swatch-bg-color="bg-green" tag-bg-color="bg-green/20" shadow-color="shadow-green">
          <template #icon>
            <Icon :icon="PawPrint" />
          </template>
          <template #title>Linha Pet</template>
          <template #description>
            Higienização segura pra quem tem bichinho em casa. Elimina odor na fonte, sem agredir patinhas e focinhos.
          </template>
          <template #tag>Pet</template>
        </CategoryCard>
        <CategoryCard swatch-bg-color="bg-rose-400/50" tag-bg-color="bg-rose-400/20" shadow-color="shadow-rose-400">
          <template #icon>
            <Icon :icon="Wind" />
          </template>
          <template #title>Removedor de Odores</template>
          <template #description>
            Neutraliza manchas antigas e odores persistentes em estofados, carpetes e tecidos. Ação profunda, cheiro de
            limpo de verdade.
          </template>
          <template #tag>Odores</template>
        </CategoryCard>
      </div>
    </template>
  </Section>
</template>

<style lang="css">
.grid-columns {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>