<script setup lang="ts">
import Button from '@/Button.vue';
import Container from './Container.vue';
import NavLink from './header/NavLink.vue';
import Logo from './Logo.vue';

</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-3">
    <Container class="flex items-center justify-between">
      <Logo />
      <nav class="flex items-center justify-between space-x-10">
        <NavLink to="/">Produtos</NavLink>
        <NavLink to="/">Sobre</NavLink>
        <NavLink to="/">Contato</NavLink>
      </nav>
      <Button>Fale Conosco</Button>
    </Container>
  </header>
</template>