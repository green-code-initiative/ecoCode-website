<template>
    <TitleBox image="true" colorBackground="#355086" typetitle="full white"
        title="Réduisons l'impact environnemental et social des solutions numériques"
        subtitle="ecoCode est un outil Open Source basé sur un référentiel de règles d'éco-conception logicielle.">
        <div style=" background-color: #57c18b; margin-top: 50px;" class="block-button-section-1">
            <ButtonBlock typebutton="white" link="/contributeur" text="Je souhaite contribuer au projet"></ButtonBlock>
            <ButtonBlock typebutton="white" link="/Entreprise" text="Je souhaite une intégration sur-mesure"></ButtonBlock>
        </div>
    </TitleBox>
    <TitleBox typetitle="title blue" title="ecoCode est une initiative qui prend racine dans la force du collectif"
        subtitle="Le numérique nous passionne et nous considérons qu’il est impératif de le rendre plus durable.">
        <div class="after-block-section-2">
            <div class="container-after">
                <p>
                    ecoCode rassemble différents types d'acteurs qui œuvrent ensemble pour rendre le numérique plus
                    responsable : laboratoires de recherche, entreprises, personnes en poste sur leur temps de travail,
                    personnes indépendantes sur leur temps libre...
                </p>
                <img src="@/assets/img/illustration/img-accueil-1.png">
            </div>
            <div class="container-after">
                <img src="@/assets/img/illustration/img-accueil-2.png">
                <p>
                    Les membres contributeurs du collectif conceptualisent et implémentent des règles permettant de repérer
                    les défauts de qualité du code source d’un projet pouvant avoir un impact écologique négatif.
                    Le tout est mis à disposition en open source.
                </p>
            </div>
        </div>
    </TitleBox>
    <GraphRule />
    <TitleBox typetitle="title blue" title="ecoCode est rendu possible grâce aux nombreux acteurs impliqués"
        subtitle="Quelques structures partenaires :">
        <BoxCarousel>
            <div class="block-button-section-1">
                <ButtonBlock typebutton="white" link="/collectif?tab=entreprise" text="Toutes les entreprises partenaires">
                </ButtonBlock>
                <ButtonBlock typebutton="white" link="/collectif?tab=membre" text="Tous nos membres contributeurs"></ButtonBlock>
            </div>
        </BoxCarousel>
    </TitleBox>
    <Form />
</template>
<script setup lang="ts">
import GraphRule from '@/components/Shared/GraphRule.vue';
import ButtonBlock from '@/components/global/Button.vue';
import TitleBox from '@/components/global/Title.vue';
import BoxCarousel from '@/components/global/BoxCarousel.vue';
import Form from '@/components/Shared/Form.vue';
</script>
<style lang="scss" scoped>@import './scss/style.scss'</style>
