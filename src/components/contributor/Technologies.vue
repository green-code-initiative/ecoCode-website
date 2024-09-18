<script setup lang="ts">
import technologies from "@/assets/data/technologies.json";

const baseLogoUrl = "/img/tech/";
</script>

<template>
  <div class="grid">
    <img
      v-for="technnology in technologies"
      :key="technnology.name"
      :src="baseLogoUrl + technnology.logo"
      :alt="technnology.name"
      width="120"
      height="120"
    />
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem 4rem;
  margin: 45px 0;

  img {
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
