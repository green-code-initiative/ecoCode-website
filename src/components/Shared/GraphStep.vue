<template>
    <div class="GraphRule">
        <h1 class="title">Les étapes pour contribuer à ecoCode</h1>
        <div class="container-rule">
            <div class="top-graph">
                <ProcessRule id="rule-1" :opacity="0" titlePosition="right" position="right" title="" text="Je rejoins GitHub"></ProcessRule>
                <ProcessRule id="rule-2" :opacity="0.2" titlePosition="right" position="right" title="" text="Je me positionne sur un ou plusieurs projets"></ProcessRule>
                <ProcessRule id="rule-3" :opacity="0.4" titlePosition="right" position="bottom" title="" text="Je m'approprie les code smells sur lesquels me baser pour écrire les règles"></ProcessRule>
            </div>
            <div class="bottom-graph">
                <ProcessRule id="rule-4" image="true" :opacity="1" titlePosition="left" position="left"
                    text="C'est parti !">
                </ProcessRule>
                <ProcessRule id="rule-5" :opacity="0.8" titlePosition="left" position="left"
                    text="Je propose une PR pour validation et intégration à la solution ecoCode"></ProcessRule>
                <ProcessRule id="rule-6" :opacity="0.6" titlePosition="left" position=""
                    text="J'écris des règles de détection Sonar"></ProcessRule>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ProcessRule from '@/components/global/ProcessRule.vue';
</script>

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

.title {
    max-width: 1050px;
    font-size: 40px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #355086;
    padding: 40px 0 0 0;
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

    .title{
        font-size: 32px;
        margin: 0 36px 0 36px;
    }
    .detail{
        font-size: 25px;
    }
}

@media screen and (max-width: 768px) {
    .title{
        font-size: 28px;
        margin: 0 36px 0 36px;
    }
    .detail{
        font-size: 20px;
        padding-bottom: 0px;
    }
}
</style>