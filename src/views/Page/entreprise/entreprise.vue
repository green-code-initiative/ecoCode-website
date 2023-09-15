<template>
    <TitleBox colorBackground="#5374c9" typetitle="white black"
        title="Nous proposons aux organisations la création de règles d'éco-conception logicielle sur-mesure."
        subtitle="En collaborant avec nous, vous réduisez votre impact numérique et contribuez à l'Open Source.">
        <div style="padding-bottom: 50px;" class="block-button-section-1">
            <ButtonBlock typebutton="white" link="/" text="Demande de contact"></ButtonBlock>
            <ButtonBlock  typebutton="white" link="/" text="Recevez le cas client Société Générale"></ButtonBlock>
        </div>
    </TitleBox>
    <TitleBox style="padding-bottom: 50px;" typetitle="title blue" title="Notre offre"
        subtitle="Nous créons des extensions SonarQube pour analyser votre code et vous permettre de réduire son impact.">
    </TitleBox>
    <Block3 title="Le processus de création d'une règle"></Block3>
    <TitleBox style="padding-bottom: 50px;" typetitle="title blue" title="Recevez notre cas client Société Générale par mail">
        <Form></Form>
    </TitleBox>
</template>
<script setup lang="ts">
import TitleBox from '@/components/global/Title.vue';
import Block3 from '@/components/Shared/Block3.vue';
import ButtonBlock from '@/components/global/Button.vue';
import Form from '@/components/Shared/FormSecond.vue';
</script>
<style lang="scss" scoped>
@import './scss/style.scss'
</style>
