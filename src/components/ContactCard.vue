<script lang="ts" setup>
import type { LucideIcon } from '@lucide/vue';
import Icon from './Icon.vue';

withDefaults(defineProps<{
  icon: LucideIcon,
  textColor?: string,
  shadowColor?: string
}>(), {
  textColor: 'text-navy',
  shadowColor: 'shadow-green-deep'
})
</script>

<template>
  <div class="flex items-center gap-5 p-5 border-[3px] border-navy rounded-2xl shadow-[6px_6px_0_0]"
    :class="shadowColor">
    <div class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy/10">
      <Icon :icon="icon" class="size-5" :class="textColor" />
    </div>
    <div>
      <p class="text-xs font-extrabold uppercase tracking-widest">
        <slot name="title" />
      </p>
      <p class="font-semibold">
        <slot name="content" />
      </p>
    </div>
  </div>
</template>