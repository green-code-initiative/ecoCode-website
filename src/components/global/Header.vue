<script setup lang="ts">
import { ref } from 'vue';
import BurgerMenuButton from "@/components/global/header/BurgerMenuButton.vue";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Trophy from "@/assets/icons/trophy.svg";
import NavItem from "@/components/global/header/NavItem.vue";

const isMenuOpen = ref(false);

const closeMenu = () => isMenuOpen.value = false;

const items = [
  { name: "Contributeur", to: "/contributeur" },
  { name: "Entreprises", to: "/entreprise" },
  { name: "Notre collectif", to: "/collectif" },
];
</script>

<template>
  <header>
    <div class="left">
      <router-link to="/" class="go-to-home">
        <img src="@/assets/img/logo-dark.webp" width="150" height="25" alt="ecoCode logo" @click="closeMenu"/>
      </router-link>
      <nav :class="{ open: isMenuOpen }">
        <nav-item v-for="item of items" :key="item.name" :name="item.name" :to="item.to" @click="closeMenu" />
        <nav-item name="Challenge 2024" to="https://challenge.ecocode.io" class="special" :icon="Trophy" @click="closeMenu"/>
      </nav>
    </div>
    <div class="right">
      <a href="https://linkedin.com/company/ecocode-io/" target="_blank" aria-label="Suivez-nous sur Linkedin">
        <Linkedin width="24" height="24"/>
      </a>
      <a href="https://github.com/green-code-initiative/ecoCode" target="_blank" aria-label="Suivez-nous sur Github">
        <Github width="24" height="24"/>
      </a>
      <BurgerMenuButton v-model="isMenuOpen" class="burger-button"/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 60px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  box-shadow: var(--shadow-border-small);
  z-index: 1;

  .left {
    display: flex;
    gap: 3rem;
  }

  .right {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .go-to-home, .menu-burger {
    display: flex;
    align-items: center;
  }
}

nav {
  display: none;
  align-items: center;
  gap: 1.25rem;
  background-color: var(--color-surface);
}

@media screen and (min-width: 920px) {
  header {
    padding: 0 60px;
  }

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
    gap: 1rem;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;

    &.open {
      display: flex;
    }
  }

  .right a {
    display: none;
  }
}
</style>
