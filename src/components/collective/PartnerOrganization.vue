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

<script setup lang="ts">
defineProps<{ name: string; logo: { filename: string; width: number; height: number } }>()
</script>

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
  border: solid 1px #87ccff;
  border-radius: 10px;
}

.name {
  font-size: 0.875rem;
  text-align: center;
  color: var(--color-on-surface);
}
</style>
