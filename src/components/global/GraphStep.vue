<script setup lang="ts">
import ProcessRule from '@/components/global/ProcessRule.vue';
</script>

<template>
  <div class="GraphRule">
    <h2 class="heading-2">Les étapes pour contribuer à ecoCode</h2>
    <div class="container-rule">
      <div class="top-graph">
        <ProcessRule id="rule-1" :opacity="0" titlePosition="right" position="right" title="" text="Je rejoins GitHub"/>
        <ProcessRule id="rule-2" :opacity="0.2" titlePosition="right" position="right" title=""
                     text="Je me positionne sur un ou plusieurs projets"/>
        <ProcessRule id="rule-3" :opacity="0.4" titlePosition="right" position="bottom" title=""
                     text="Je m'approprie les code smells sur lesquels me baser pour écrire les règles"/>
      </div>
      <div class="bottom-graph">
        <ProcessRule id="rule-4" image="true" :opacity="1" titlePosition="left" position="left"
                     text="C'est parti !"/>
        <ProcessRule id="rule-5" :opacity="0.8" titlePosition="left" position="left"
                     text="Je propose une PR pour validation et intégration à la solution ecoCode"/>
        <ProcessRule id="rule-6" :opacity="0.6" titlePosition="left" position=""
                     text="J'écris des règles de détection Sonar"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.GraphRule {
    width: 100%;
    min-height: 396px;
    height: max-content;
    background-color: #fff;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;
}

.heading-2 {
    margin-top: 40px;
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
}
</style>
