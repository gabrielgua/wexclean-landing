<script setup lang="ts">
import Button from '@/components/Button.vue';
import Container from './Container.vue';
import NavLink from './header/NavLink.vue';
import Logo from './Logo.vue';
import Icon from './Icon.vue';
import { Menu, MessageCircle, X } from '@lucide/vue';
import { ref } from 'vue';

const isMobileHeaderOpen = ref(false);

</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-3 shadow-sm">
    <Container class="flex items-center justify-between">
      <Logo />
      <nav class="items-center justify-between space-x-10 hidden md:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </nav>
      <Button class="hidden md:flex">
        <Icon :icon="MessageCircle" fill="var(--color-paper)" />
        Fale Conosco
      </Button>

      <button type="button" class="md:hidden" :aria-expanded="isMobileHeaderOpen" aria-label="Abrir menu"
        @click="isMobileHeaderOpen = !isMobileHeaderOpen">
        <Icon :icon="isMobileHeaderOpen ? X : Menu" />
      </button>
    </Container>

    <div class="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
      :class="isMobileHeaderOpen ? 'max-h-80' : 'max-h-0'">
      <Container class="flex flex-col space-y-4 pt-6 pb-4">
        <NavLink to="/" @click="isMobileHeaderOpen = false">Home</NavLink>
        <NavLink to="/products" @click="isMobileHeaderOpen = false">Produtos</NavLink>
        <NavLink to="/contact" @click="isMobileHeaderOpen = false">Contato</NavLink>
        <Button class="mt-3 w-full justify-center" @click="isMobileHeaderOpen = false">
          <Icon :icon="MessageCircle" fill="var(--color-paper)" />
          Fale Conosco
        </Button>
      </Container>
    </div>
  </header>
</template>