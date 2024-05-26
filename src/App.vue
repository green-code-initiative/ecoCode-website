<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/shared/layout/AppHeader.vue";
import Footer from "@/components/shared/layout/AppFooter.vue";
</script>

<template>
  <Header />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </template>
  </RouterView>
  <Footer />
</template>
