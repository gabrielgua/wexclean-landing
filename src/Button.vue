<script setup lang="ts">
withDefaults(defineProps<{
  bgColor?: string
  textColor?: string
  shadowColor?: string
  borderColor?: string
}>(), {
  bgColor: 'bg-green',
  textColor: 'text-navy',
  shadowColor: 'shadow-navy',
  borderColor: 'border-navy',
});
</script>

<template>
  <button
    class="font-bold text-sm uppercase px-5 py-3 rounded-full border-3 shadow-[4px_4px_0] transition-all duration-150 ease-in-out cursor-pointer hover:-translate-0.5 hover:shadow-[6px_6px_0] active:translate-0 active:shadow-[2px_2px_0] outline-none"
    :class="[bgColor, textColor, shadowColor, borderColor]">
    <slot />
  </button>
</template>