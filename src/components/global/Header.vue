<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import ChevronLeftIcon from '@/assets/icons/chevron_left.svg?component';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg?component';
import BurgerMenuButton from "@/components/global/header/BurgerMenuButton.vue";

const route = useRoute();
const isMenuOpen = ref(false);

const closeMenu = () => isMenuOpen.value = false;

const items = [
  { name: "Contributeur", to: "/contributeur" },
  { name: "Entreprises", to: "/entreprise" },
  { name: "Notre collectif", to: "/collectif" },
];

const currentColor = computed(() => {
  if (route.path === '/contributeur') {
    return '#529a75';
  } else if (route.path === '/entreprise') {
    return '#4f65a0';
  } else if (route.path.startsWith('/collectif')) {
    return '#95353e';
  }
  return '#3a4e72';
});
</script>

<template>
  <header :style="{ backgroundColor: currentColor }">
    <router-link to="/" class="go-to-home">
      <img src="@/assets/img/logo.webp" width="167" height="25" alt="ecoCode logo" @click="closeMenu"/>
    </router-link>
    <nav :style="{ backgroundColor: currentColor }" :class="{ open: isMenuOpen }">
      <router-link v-for="item of items" :key="item.name" :to="item.to" @click="closeMenu">
        <ChevronLeftIcon aria-hidden="true" class="left"/>
        {{ item.name }}
        <ChevronRightIcon aria-hidden="true" class="right"/>
      </router-link>
    </nav>
    <BurgerMenuButton v-model="isMenuOpen" class="burger-button"/>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 60px;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 2rem;

  .go-to-home, .menu-burger {
    display: flex;
    align-items: center;
  }
}

nav {
  display: none;
  align-items: center;
  gap: 4rem;

  > a {
    color: white;
    position: relative;
    text-transform: uppercase;
    opacity: 0.8;

    svg {
      position: absolute;
      opacity: 0;
      transition: transform ease-in-out .2s, opacity ease-in-out .2s;
    }

    svg.left {
      left: -1.5rem;
      bottom: 0.3rem;
      transform: translateY(1rem);
    }

    svg.right {
      right: -1.5rem;
      top: 0.3rem;
      transform: translateY(-1rem);
    }

    &.router-link-active {
      opacity: 1;
      text-shadow: 0 0 1px white;

      svg {
        opacity: 1;
        transform: rotateZ(35deg) translateY(0);
      }
    }
  }
}

@media screen and (min-width: 920px) {
  nav {
    display: flex;
  }

  .burger-button {
    display: none;
  }
}

@media screen and (max-width: 919px) {
  nav {
    display: none;
    flex-direction: column;
    padding: 1rem;
    gap: 1.5rem;
    z-index: 1;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;

    &.open {
      display: flex;
    }
  }
}
</style>
