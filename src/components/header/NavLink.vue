<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <RouterLink :to="to" class="link relative text-[15px] font-bold text-navy transition-all"
    active-class="active-link text-blue! font-extrabold">
    <slot />
  </RouterLink>
</template>

<style scoped>
.link::after {
  content: '';
  position: absolute;
  bottom: -0.175rem;
  left: 0;
  height: 3px;
  width: 0%;
  background-color: var(--color-blue);
  transition: width 0.25s ease;
}

.link:hover::after {
  width: 100%;
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: -0.175rem;
  width: 100%;
  background-color: var(--color-blue);
}
</style>