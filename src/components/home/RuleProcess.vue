<script setup lang="ts">
import ProcessRule from "@/components/global/ProcessRule.vue";
import ButtonBlock from "@/components/global/Button.vue";
</script>

<template>
  <div class="GraphRule">
    <h2 class="heading-2">Le processus de création d'une règle ecoCode</h2>
    <div class="container-rule">
      <div class="top-graph">
        <ProcessRule id="rule-1" titlePosition="right" position="right" title="identification"
                     text="Nous identifions des patterns de code qui pourraient être améliorés (code smells)"/>
        <ProcessRule id="rule-2" titlePosition="right" position="right" title="production"
                     text="Les membres contributeurs produisent la règle permettant de réduire l’impact du code"/>
        <ProcessRule id="rule-3" titlePosition="middle" position="bottom" title="expérimentation"
                     text="La règle est testée en comparaison avec le code smell"/>
      </div>
      <div class="bottom-graph">
        <ProcessRule id="rule-4" titlePosition="left" position="left" title="utilisation"
                     text="Utilisation de la règle par des équipes techniques dans leur organisation"/>
        <ProcessRule id="rule-5" titlePosition="left" position="left" title="intégration"
                     text="La règle est publiée dans le référentiel Open Source d’ecoCode"/>
        <ProcessRule id="rule-6" titlePosition="middle" position="null" title="validation"
                     text="Une équipe expérimentée étudie et valide la nouvelle règle"/>
      </div>
    </div>
    <span class="detail">Nous travaillons également sur des règles sur-mesure pour des organisations clientes</span>
    <ButtonBlock typebutton="blue" link="/Entreprise" text="En savoir plus"/>
  </div>
</template>

<style scoped>
.GraphRule {
    width: 100%;
    min-height: 396px;
    height: max-content;
    background-color: #f3f3f3;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 50px 0;
}

.heading-2 {
  max-width: none;
}

.container-rule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 50px 0 0 0;
}

.top-graph {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}

.bottom-graph {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
}

.detail {
    max-width: 463px;
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #022826;
    text-align: center;
    padding: 50px 0 50px 0;
}

@media screen and (max-width: 1150px) {
    .container-rule {
        flex-direction: column;
    }

    .top-graph {
        flex-direction: column;
    }

    .bottom-graph {
        flex-direction: column;
    }

    #rule-4 {
        order: 3;
    }

    #rule-5 {
        order: 2;
    }

    #rule-6 {
        order: 1;
    }
    .detail{
        font-size: 25px;
    }
}

@media screen and (max-width: 768px) {
    .detail{
        font-size: 20px;
        padding-bottom: 0;
    }
}
</style>
