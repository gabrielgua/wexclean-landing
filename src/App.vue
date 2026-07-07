<script setup lang="ts">
import Benefits from './components/Benefits.vue';
import CallToAction from './components/CallToAction.vue';
import Categories from './components/Categories.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Marquee from './components/Marquee.vue';

</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <Header />
    <Hero />
    <Marquee />
    <Categories />
    <Benefits />
    <CallToAction />
    <Footer class="mt-auto" />
  </div>
</template>
