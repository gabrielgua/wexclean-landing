<script lang="ts" setup>
withDefaults(defineProps<{
  swatchBgColor?: string,
  tagBgColor?: string,
  shadowColor?: string
}>(), {
  swatchBgColor: 'bg-blue',
  tagBgColor: 'bg-blue/20',
  shadowColor: 'shadow-navy'
})
</script>

<template>
  <div class="grid grid-cols-[autofit_minmax_(240px_1px)] gap-6">
    <div
      class="flex flex-col border-[3px] border-navy rounded-2xl p-6 bg-cream relative overflow-hidden transition-all duration-200 ease-in-out hover:-translate-y-1.5 shadow-[8px_10px_0px]"
      :class="shadowColor">
      <div class="size-14 rounded-xl grid place-items-center text-2xl border-[3px] border-navy mb-6"
        :class="swatchBgColor">
        <slot name="icon" />
      </div>
      <h3 class="text-xl mb-2">
        <slot name="title" />
      </h3>
      <p class="text-sm text-navy/80 leading-relaxed mb-6">
        <slot name="description"></slot>
      </p>
      <span
        class="uppercase mt-auto max-w-max text-xs font-extrabold tracking-wider py-1.5 px-3 rounded-full border-2 border-navy"
        :class="tagBgColor">
        <slot name="tag" />
      </span>
    </div>
  </div>
</template>