<script setup lang="ts">
defineProps<{
  title: string;
  subTitle?: string;
  backgroundColor?: "white" | "grey";
}>();
</script>

<template>
  <div class="section" :class="backgroundColor">
    <h2 class="heading-2">{{ title }}</h2>
    <h3 class="heading-3" v-if="subTitle">{{ subTitle }}</h3>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;

  .heading-2,
  .heading-3 {
    text-align: center;
  }

  &.grey {
    background-color: #f3f3f3;
  }
}
</style>
