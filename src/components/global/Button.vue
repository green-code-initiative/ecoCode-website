<script setup lang="ts">
import ChevronLeft from '@/assets/icons/chevron_left.svg';
import ChevronRight from '@/assets/icons/chevron_right.svg';
import type { RouterLinkProps } from "vue-router";

withDefaults(defineProps<{
  text: string;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit'
  link?: RouterLinkProps['to'];
}>(), { type: 'button' });
</script>

<template>
  <router-link v-if="link" :class="variant" :to="link">
    <ChevronLeft/>
    {{ text }}
    <ChevronRight/>
  </router-link>
  <button v-else :class="variant" :type="type">
    <ChevronLeft/>
    {{ text }}
    <ChevronRight/>
  </button>
</template>

<style lang="scss" scoped>
button,
a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 1rem;
  border-radius: var(--radius);
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &.primary {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border: 2px solid var(--color-on-primary);
  }

  &.secondary {
    background-color: white;
    border: 2px solid var(--color-secondary);
    color: var(--color-primary);
  }
}
</style>
