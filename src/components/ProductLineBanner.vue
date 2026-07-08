<script setup lang="ts">
import { ref } from 'vue';
import type { LucideIcon } from '@lucide/vue';
import { ChevronDown, ListChecks, Layers, ExternalLink, Flower2, Bubbles, Leaf } from '@lucide/vue';
import Icon from './Icon.vue';
import Container from './Container.vue';
import Divider from './Divider.vue';
import Button from '@/Button.vue';

type ProductIndications = {
  label: string,
  icon: LucideIcon
}

withDefaults(defineProps<{
  icon: LucideIcon,
  title: string,
  tagline: string,
  description: string,
  indications: ProductIndications[],
  sizes: string[],
  amazonUrl: string,
  bgClass?: string,
  textClass?: string,
  details?: string[],
}>(), {
  bgClass: 'bg-navy',
  textClass: 'text-cream',
  details: () => [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat euismod, malesuada mauris eget, sodales sem. Integer non nibh nec quam feugiat porttitor. Nulla facilisi.',
    'Suspendisse potenti. Vivamus a lorem in dui posuere lacinia. Fusce vel felis a leo bibendum efficitur. Donec sit amet sapien nec risus fermentum consequat.',
  ],
})

const isOpen = ref(false);
</script>

<template>
  <section :class="bgClass">
    <Container class="grid grid-cols-1 md:grid-cols-2 gap-8 py-14 md:py-16">
      <div class="space-y-8">
        <div class="flex items-center gap-5">
          <div
            class="flex size-24 shrink-0 items-center justify-center rounded-2xl border-[3px] border-navy bg-white/15">
            <Icon :icon="icon" class="h-10 w-10" :class="textClass" />
          </div>
          <div>
            <span class="text-sm font-extrabold uppercase tracking-widest" :class="textClass">{{ tagline }}</span>
            <h2 class="text-3xl md:text-5xl uppercase leading-none tracking-wide" :class="textClass">
              {{ title }}
            </h2>
          </div>
        </div>

        <p class="max-w-2xl text-base leading-relaxed md:text-lg" :class="textClass">
          {{ description }}
        </p>

        <Divider />

        <div>
          <h3 class="text-sm uppercase text-cream/90 mb-6" :class="textClass">Indicações</h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 space-y-2 text-sm leading-relaxed" :class="textClass">
            <li v-for="item in indications" :key="item.label" class="flex items-center gap-4 text-base">
              <Icon :icon="item.icon" class="size-12 shrink-0" />
              {{ item.label }}
            </li>
          </ul>
        </div>

        <Divider />

        <div :class="textClass">
          <p>
            Detergente concentrado para extratoras disponíveis nos tamanhos:
            <strong>1 Litro</strong>
            e
            <strong>5 Litros</strong>.
          </p>
        </div>

        <div>
          <ul
            class="p-6 rounded-3xl border-4 border-navy bg-cream grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-8 leading-relaxed">
            <li class="flex flex-col items-center gap-4 text-base">
              <div class="bg-rose-100 grid place-items-center rounded-full p-5">
                <Icon :icon="Flower2" :size="64" class="text-rose-400" />
              </div>
              <p class="text-base text-center uppercase font-['Anton',sans-serif]">
                Fragrância <br>
                Cereja & Amêndoa
              </p>
            </li>
            <li class="flex flex-col items-center gap-4 text-base">
              <div class="bg-blue-100 grid place-items-center rounded-full p-5">
                <Icon :icon="Bubbles" :size="64" class="text-blue" />
              </div>
              <p class="text-base text-center uppercase font-['Anton',sans-serif]">
                Baixa <br>
                Espumação
              </p>
            </li>
            <li class="flex flex-col items-center gap-4 text-base">
              <div class="bg-green-100 grid place-items-center rounded-full p-5">
                <Icon :icon="Leaf" :size="64" class="text-green" />
              </div>
              <p class="text-base text-center uppercase font-['Anton',sans-serif]">
                Produto <br>
                Biodegradável
              </p>
            </li>
          </ul>
        </div>



        <div class="flex flex-col items-center gap-4">
          <Button class="w-full justify-center" bg-color="bg-navy" border-color="border-green"
            shadow-color="shadow-green" text-color="text-paper">
            <Icon :icon="ExternalLink" class="h-4 w-4" />
            Conferir na Amazon
          </Button>

          <Button class="w-full justify-center" type="button" :aria-expanded="isOpen" @click="isOpen = !isOpen">
            {{ isOpen ? 'Fechar' : 'Mais Informações' }}
            <Icon :icon="ChevronDown" class="h-4 w-4 transition-transform duration-300"
              :class="{ 'rotate-180': isOpen }" />
          </Button>
        </div>

        <div class="grid transition-all duration-300 ease-in-out"
          :class="isOpen ? 'mt-8 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'">
          <div class="overflow-hidden">
            <div
              class="space-y-4 rounded-2xl border-[3px] border-navy bg-white/95 p-7 text-sm leading-relaxed text-navy/80 md:text-base">
              <p v-for="(paragraph, i) in details" :key="i">{{ paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center overflow-hidden">
        <img src="../../public/images/limpa-extrai-1l.png" alt="Limpa Extrai 1L" class="max-h-200 -mx-8" />
      </div>
    </Container>
  </section>
</template>