<script setup lang="ts">
import ContributorProfiles from '@/components/contributor/ContributorProfiles.vue';
import Newsletter from '@/components/contributor/Newsletter.vue';
import Technologies from '@/components/contributor/Technologies.vue';
import AppButton from '@/components/global/Button.vue';
import AppHero from '@/components/global/Hero.vue';
import GraphStep from '@/components/Shared/GraphStep.vue';
import AppSection from "@/components/Shared/AppSection.vue";
</script>

<template>
  <AppHero
      variant="secondary"
      title="Tu te soucies de réduire l'impact environnemental et social des solutions numériques ?"
      sub-title="Rejoins ecoCode et contribue à faire du numérique un domaine plus durable."
  >
    <template #actions>
      <AppButton variant="secondary" link="#newsletter" text="Je rejoins la communauté"/>
    </template>
  </AppHero>

  <AppSection title="ecoCode est un projet qui tire sa force du collectif">
    <ContributorProfiles/>

    <h3 class="heading-3" style="max-width: none">
      Les technologies couvertes par ecoCode (en attendant d’aller plus loin !)
    </h3>
    <Technologies/>
  </AppSection>

  <GraphStep/>
  <Newsletter id="newsletter"/>
</template>
