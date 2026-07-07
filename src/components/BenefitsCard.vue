<template>
  <div class="py-2 px-0">
    <h4 class="text-[15px] text-gold tracking-widest mb-3.5 font-['Anton',sans-serif]">
      <slot name="title" />
    </h4>
    <h3 class="text-xl text-paper mb-2.5">
      <slot name="subtitle" />
    </h3>
    <p class="text-sm leading-6 text-paper/80">
      <slot name="description" />
    </p>
  </div>

</template>