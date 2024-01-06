<template>
  <header :style="{ backgroundColor: pageColor }">
    <router-link to="/">
      <img class="logo-header" src="@/assets/img/logo.webp" width="167" height="25" alt="ecoCode logo" @click="closeMenu"/>
    </router-link>
    <ul :style="{ backgroundColor: pageColor }" :class="{ 'menu-open': isMenuOpen }">
      <router-link to="/contributeur" @click="closeMenu">
        <img width="40" height="40" v-if="isContributeurPage" src="@/assets/img/icon/arrow-left-white.webp">
        <li :class="{ active: isContributeurPage }">Contributeur</li>
        <img width="40" height="40" v-if="isContributeurPage" src="@/assets/img/icon/arrow-right-white.webp">
      </router-link>
      <router-link to="/entreprise" @click="closeMenu">
        <img width="40" height="40" v-if="isEntreprisePage" src="@/assets/img/icon/arrow-left-white.webp">
        <li :class="{ active: isEntreprisePage }">Entreprises</li>
        <img width="40" height="40" v-if="isEntreprisePage" src="@/assets/img/icon/arrow-right-white.webp">
      </router-link>
      <router-link to="/collectif" @click="closeMenu">
        <img width="40" height="40" v-if="isTeamPage" src="@/assets/img/icon/arrow-left-white.webp">
        <li :class="{ active: isTeamPage }">Notre collectif</li>
        <img width="40" height="40" v-if="isTeamPage" src="@/assets/img/icon/arrow-right-white.webp">
      </router-link>
    </ul>
    <div class="menu-burger" @click="toggleMenu">
      <div class="burger-icon" :class="{ 'cross-icon': isMenuOpen }">
        <div id="bar-1" class="bar" :class="{ 'hide': isMenuOpen }"></div>
        <div id="bar-2" class="bar" :class="{ 'cross-bar': isMenuOpen }"></div>
        <div id="bar-3" class="bar" :class="{ 'cross-bar2': isMenuOpen }"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};


const isContributeurPage = computed(() => route.path === '/contributeur');
const isEntreprisePage = computed(() => route.path === '/entreprise');
const isTeamPage = computed(() => route.path.startsWith('/collectif'));

const pageColor = computed(() => {
  if (isContributeurPage.value) {
    return '#529a75';
  } else if (isEntreprisePage.value) {
    return '#4f65a0';
  } else if (isTeamPage.value) {
    return '#95353e';
  }
  return '#3a4e72';
});
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  user-select: none;
}

.logo-header {
  margin-left: 40px;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
}

a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 25px 0 25px;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: white;
  margin-top: 5px;
  transition: transform 0.3s;
}

.cross-icon{
    transform: rotate(-45deg);
}
.cross-bar {
 transform: translateY(7px)
}

.cross-bar2 {
  transform: rotate(-90deg);
 }

.hide{
  display: none;
}

li {

  opacity: 0.5;
  color: white;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
}

.active {
  opacity: 1;
}

.menu-burger {
  display: none;
  cursor: pointer;
  padding: 10px;
  margin-right: 50PX;

}

.burger-icon {
  width: 25px;
  height: 25px;
  margin: 5px 0;
}

.bar{
  width: 100%;
  height: 2px;
  background-color: white;
  margin-top: 5px;
}

.menu-open {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #3a4e72ff;
  z-index: 11;
  > a {
    margin-left: 65px;
    padding-bottom: 25px;
  }
}

@media screen and (max-width: 920px) {
  ul{
    display: none;
  }

  .menu-burger{
    display: block;
  }
  router-link-active{
    margin-left: 25px;
  }
}
</style>
