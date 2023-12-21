<template>
  <div class="app-fieldset">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app-fieldset {
  display: grid;
  gap: 1rem;

  @media (min-width: 796px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
