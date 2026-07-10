<script setup lang="ts">
withDefaults(defineProps<{
  label: string,
  name: string,
  type?: 'text' | 'textarea' | 'email',
  placeholder?: string,
  required?: boolean,
  rows?: number,
}>(), {
  type: 'text',
  required: true,
  rows: 5,
})

const model = defineModel<string>()
</script>

<template>
  <label :for="name" class="flex flex-col gap-2">
    <span class="text-xs font-extrabold uppercase tracking-widest text-navy/70">{{ label }}</span>
    <textarea v-if="type === 'textarea'" :id="name" v-model="model" :name="name" :rows="rows" :required="required"
      :placeholder="placeholder"
      class="resize-none rounded-xl border-[3px] border-navy bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-navy/40 transition focus:outline-none focus:ring-2 focus:ring-navy-deep/40" />
    <input v-else :id="name" v-model="model" :name="name" :type="type" :required="required" :placeholder="placeholder"
      class="rounded-xl border-[3px] border-navy bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-navy/40 transition focus:outline-none focus:ring-2 focus:ring-navy-deep/40" />
  </label>
</template>