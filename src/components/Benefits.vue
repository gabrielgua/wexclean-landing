<script setup lang="ts">
import BenefitsCard from './BenefitsCard.vue';
import Section from './Section.vue';

</script>

<template>
  <Section badge-bg-color="bg-green">
    <template #badge>Por que Wex Clean</template>
    <template #title>Feito para limpar de verdade</template>
    <template #description>
      Sem enrolação: nosso compromisso é performance visível e um preço que cabe na sua
      rotina.
    </template>
    <template #content>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        <BenefitsCard>
          <template #title>RESULTADO</template>
          <template #subtitle>Poder de limpeza real</template>
          <template #description>
            Fórmulas concentradas que resolvem de primeira — sem precisar esfregar duas vezes.
          </template>
        </BenefitsCard>
        <BenefitsCard>
          <template #title>RENDIMENTO</template>
          <template #subtitle>Cada frasco rende mais</template>
          <template #description>
            Concentração pensada pra durar mais na prateleira e custar menos no fim do mês.
          </template>
        </BenefitsCard>
        <BenefitsCard>
          <template #title>EXPERIÊNCIA</template>
          <template #subtitle>Fragrância que permanece</template>
          <template #description>
            O cheiro de limpo que fica no ambiente horas depois — sem mascarar, sem exagerar.
          </template>
        </BenefitsCard>
      </div>
    </template>
  </Section>

</template>
