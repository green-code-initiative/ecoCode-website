<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>

</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/global/Header.vue';
import Footer from '@/components/global/Footer.vue';
</script>
<style scoped>


</style>
