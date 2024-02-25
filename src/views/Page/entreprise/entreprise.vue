<script setup lang="ts">
import CaseStudyForm from '@/components/company/CaseStudyForm.vue';
import RuleCreationProcess from '@/components/company/RuleCreationProcess.vue';
import AppButton from '@/components/global/Button.vue';
import TitleBox from '@/components/global/Title.vue';

const scroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
    <TitleBox colorBackground="#5374c9" typetitle="white black"
        title="Nous proposons aux organisations la création de règles d'éco-conception logicielle sur-mesure."
        subtitle="En collaborant avec nous, vous réduisez votre impact numérique et contribuez à l'Open Source.">
        <div class="button-container">
            <AppButton variant="secondary" :link="{ path: '/', hash: '#contact' }" text="Demande de contact"/>
            <AppButton variant="secondary" link="#client-case" text="Recevez le cas client Société Générale"/>
        </div>
    </TitleBox>
    <TitleBox style="padding-bottom: 50px;" typetitle="title blue" title="Notre offre"
        subtitle="Nous créons des extensions SonarQube pour analyser votre code et vous permettre de réduire son impact.">
    </TitleBox>
    <RuleCreationProcess />
    <TitleBox id="client-case" style="padding-bottom: 50px;" typetitle="title blue" title="Recevez notre cas client Société Générale par mail">
        <CaseStudyForm />
    </TitleBox>
</template>

<style lang="scss" scoped>
.button-container {
  display: flex;
  flex-direction: column;
  margin: 40px;
  gap: 1.2rem;

  @media screen and (min-width: 921px) {
    flex-direction: row;
    gap: 4rem;
  }
}
</style>
