<script setup lang="ts">
import ContributorProfiles from '@/components/contributor/ContributorProfiles.vue';
import Technologies from '@/components/contributor/Technologies.vue';
import TitleBox from '@/components/global/Title.vue';
import AppButton from '@/components/global/Button.vue';
import Newsletter from '@/components/contributor/Newsletter.vue';
import GraphStep from '@/components/Shared/GraphStep.vue';

const scroll=() => {
  const element = document.getElementById('newsletter');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
    <TitleBox colorBackground="#57c18b" typetitle="full white" title="Tu te soucies de réduire l'impact environnemental et social des solutions numériques ?"
        subtitle="Rejoins ecoCode et contribue à faire du numérique un domaine plus durable.">
        <AppButton @click="scroll()" style="padding-bottom: 50px;" typebutton="white" link="#newsletter" text="Je rejoins la communauté" />
    </TitleBox>
    <TitleBox typetitle="blue black light" title="ecoCode est un projet qui tire sa force du collectif">
      <ContributorProfiles />

      <h3 class="heading-3" style="margin-top: 20px;max-width: none">
        Les technologies couvertes par ecoCode (en attendant d’aller plus loin !)
      </h3>
      <Technologies />
    </TitleBox>
    <GraphStep />
    <Newsletter id="newsletter" />
</template>
