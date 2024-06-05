<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ name: string; to: string; icon?: any }>();

const isExternal = computed(() => props.to.startsWith("http"));
</script>

<template>
  <a v-if="isExternal" :href="to" v-bind="$attrs">
    {{ name }}
    <component v-if="icon" :is="icon" width="16" height="16" />
  </a>
  <router-link v-else :to="to">
    {{ name }}
  </router-link>
</template>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: inherit;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius);
  transition: background-color 0.08s ease-in-out;

  &:hover,
  &.router-link-active {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
