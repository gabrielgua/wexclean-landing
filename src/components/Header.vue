<script setup lang="ts">
import Button from '@/Button.vue';
import Container from './Container.vue';
import NavLink from './header/NavLink.vue';
import Logo from './Logo.vue';
import Icon from './Icon.vue';
import { MessageCircle } from '@lucide/vue';

</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-3 shadow-sm">
    <Container class="flex items-center justify-between">
      <Logo />
      <nav class="flex items-center justify-between space-x-10">
        <NavLink to="/">Produtos</NavLink>
        <NavLink to="/">Sobre</NavLink>
        <NavLink to="/">Contato</NavLink>
      </nav>
      <Button>
        <Icon :icon="MessageCircle" fill="var(--color-paper)" />
        Fale Conosco
      </Button>
    </Container>
  </header>
</template>