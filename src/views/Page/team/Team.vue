<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <router-link to="membres">Membres contributeurs</router-link>
    <router-link to="organisations">Organisations partenaires</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss" scoped>
nav {
  background-color: var(--color-tertiary);
  color: var(--color-on-tertiary);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3.5rem 0;
  gap: 2rem;

  > a {
    opacity: 0.5;
    text-align: center;
    color: inherit;
    font-size: 1.5rem;
    font-weight: 900;

    &.router-link-active {
      opacity: 1 !important;
      text-decoration: underline;
      text-underline-offset: 15px;
    }
  }

  @media screen and (min-width: 796px) {
    flex-direction: row;
    gap: 4rem;
  }

  @media screen and (min-width: 960px) {
    gap: 8rem;

    > a {
      font-size: 2rem;
    }
  }
}
</style>
