<script setup lang="ts">
import Technologies from '@/components/contributor/Technologies.vue';
import TitleBox from '@/components/global/Title.vue';
import ButtonBlock from '@/components/global/Button.vue';
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
        <div style=" background-color: #57c18b;" class="block-button-section-1">
            <ButtonBlock @click="scroll()" style="padding-bottom: 50px;" typebutton="white" link="#newsletter" text="Je rejoins la communauté"></ButtonBlock>
        </div>
    </TitleBox>
    <TitleBox typetitle="blue black light" title="ecoCode est un projet qui tire sa force du collectif">
        <div class="container-list">
            <span class="container-title">Les profils des contributrices et contributeurs :</span>
            <ul>
                <li><img width="24" height="24" src="@/assets/img/icon/arrow-dev.webp">Salariées et salariés en poste avec
                    un temps dédié par leur organisation sur ecoCode </li>
                <li><img width="24" height="24" src="@/assets/img/icon/arrow-dev.webp">Indépendantes et indépendants pour
                    une contribution bénévole à l'Open Source
                </li>
                <li><img width="24" height="24" src="@/assets/img/icon/arrow-dev.webp">Salariées et salariés sur leur temps
                    libre...</li>
            </ul>
        </div>
        <span class="titleSimple">Les technologies couvertes par ecoCode (en attendant d’aller plus loin !)</span>
        <Technologies />
    </TitleBox>
    <GraphStep />
    <Newsletter id="newsletter" />
</template>

<style lang="scss" scoped>
@import './scss/style.scss';
</style>
