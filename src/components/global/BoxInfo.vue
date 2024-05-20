<script setup lang="ts">
defineProps<{ title: string; text: string }>();
</script>

<template>
  <div class="container-block">
    <h3 class="heading-3">{{ title }}</h3>
    <div class="container">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heading-3 {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.container-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container {
  width: 260px;
  height: 100%;
  padding: 3rem 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-border-small);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--color-surface);
}
</style>
