<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/shared/layout/AppHeader.vue';
import Footer from '@/components/shared/layout/AppFooter.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
