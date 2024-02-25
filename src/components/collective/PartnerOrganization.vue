<script setup lang="ts">
defineProps<{ name: string; logo: { filename: string; width: number; height: number } }>()
</script>

<template>
  <div class="container">
    <div class="image">
      <img
          :src="'/img/organizations/' + logo.filename"
          :width="logo.width"
          :height="logo.height"
          :alt="'Logo ' + name"
      />
    </div>
    <p class="name">{{ name }}</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-border-small);
}

.name {
  font-size: 0.875rem;
  text-align: center;
  color: var(--color-on-surface);
}
</style>
