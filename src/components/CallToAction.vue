<script setup lang="ts">
import Button from '@/Button.vue';
import Section from './Section.vue';
import Icon from './Icon.vue';
import { MoveRight } from '@lucide/vue';

</script>

<template>
  <Section class="border-y-4 border-navy-deep" bg-color="section-gradient" text-color="text-cream" centered
    description-text-color="text-blue-200">
    <template #title>Pronto para deixar tudo brilhando?</template>
    <template #description>Confira nossa linha de produtos profissionais de limpeza.</template>
    <template #content>
      <RouterLink to="/products">
        <Button class="justify-self-center" bg-color="bg-gold" text-color="text-navy-deep"
          shadow-color="shadow-navy-deep" border-color="border-navy-deep">
          Ver produtos
          <Icon :icon="MoveRight" />
        </Button>
      </RouterLink>
    </template>
  </Section>
</template>

<style>
.section-gradient {
  background: linear-gradient(120deg, var(--color-navy), var(--color-blue) 55%, var(--color-sky));
}
</style>