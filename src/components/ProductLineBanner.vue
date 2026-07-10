<script setup lang="ts">
import Button from '@/components/Button.vue';
import type { LucideIcon } from '@lucide/vue';
import { Bubbles, Cherry, ChevronDown, ExternalLink, Leaf, Sprout } from '@lucide/vue';
import { ref } from 'vue';
import Container from './Container.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';

type ProductIndications = {
  label: string,
  icon: LucideIcon
}

type ProductDetails = {
  title?: string,
  details?: string,
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
  details?: ProductDetails[],
  reverse?: boolean,
  imgUrl?: string
}>(), {
  bgClass: 'bg-navy',
  textClass: 'text-cream',
  reverse: false
})

const shiowDetails = ref(false);
</script>

<template>
  <section :class="bgClass">
    <Container class="grid grid-cols-1 md:grid-cols-2 gap-8 py-14 md:py-16"
      :class="reverse ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''">
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

        <div :class="textClass" class="space-y-6">
          <h3>Tamanhos disponíveis</h3>
          <ul class="flex items-center gap-3">
            <li class="py-1 px-3 border-2 rounded-full  border-paper text-sm font-bold" v-for="(size, i) in sizes"
              :key="i">
              {{ size }}
            </li>
          </ul>

        </div>

        <div>
          <ul
            class="p-6 rounded-3xl border-4 border-navy bg-cream grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-8 leading-relaxed">
            <li class="flex flex-col items-center gap-4 text-base">
              <div class="bg-rose-100 grid place-items-center rounded-full p-5">
                <Icon :icon="Cherry" :size="64" class="text-rose-400" />
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
            <li class="flex flex-col items-center gap-4 text-base">
              <div class="bg-emerald-100 grid place-items-center rounded-full p-5">
                <Icon :icon="Sprout" :size="64" class="text-emerald-500" />
              </div>
              <p class="text-base text-center uppercase font-['Anton',sans-serif]">
                Ph <br>
                Neutro
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

          <Button class="w-full justify-center" type="button" :aria-expanded="shiowDetails"
            @click="shiowDetails = !shiowDetails">
            {{ shiowDetails ? 'Fechar' : 'Mais Informações' }}
            <Icon :icon="ChevronDown" class="h-4 w-4 transition-transform duration-300"
              :class="{ 'rotate-180': shiowDetails }" />
          </Button>
        </div>

        <div class="grid transition-all duration-300 ease-in-out"
          :class="shiowDetails ? 'mt-8 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'">
          <div class="overflow-hidden">
            <div
              class="space-y-4 rounded-2xl border-[3px] border-navy bg-white/95 p-6 text-sm leading-relaxed md:text-base">
              <div v-for="(paragraph, i) in details" :key="i">
                <p class="text-navy-deep font-extrabold uppercase" v-if="paragraph.title">{{ paragraph.title }}</p>
                <p class="text-navy/80">{{ paragraph.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center overflow-hidden">
        <img :src="imgUrl" :alt="title" class="max-h-200 -mx-8" />
      </div>
    </Container>
  </section>
</template>