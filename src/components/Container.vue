<template>
  <div class="container container-custom-width mx-auto">
    <slot />
  </div>
</template>
<style>
.container-custom-width {
  width: min(100% - 2rem);
}
</style>