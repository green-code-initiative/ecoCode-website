<template>
    <div class="container">
        <div class="boxEntreprise" v-for="partenaire in tabPartenaire">
            <div class="box-container">
                <img :src="getImageUrl(partenaire.img)" :alt="partenaire.alt" :width="partenaire.width"
                    :height="partenaire.height" />
            </div>
            <span class="name">{{ partenaire.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import partenairesData from '@/assets/data/entreprisePartenaire.json';

const tabPartenaire = partenairesData;

function getImageUrl(imgPath: string) {
    return (`/img/logo/${imgPath}`);
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 37px 0 0 0;
    max-width: 1200px;
}

.boxEntreprise {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 37px 0 0 0;
    max-width: 1200px;

}

.box-container {
    width: 180px;
    height: 100px;
    margin: 0px 23.5px 9px 23.5px;
    border-radius: 10px;
    border: solid 1px #87ccff;
    margin: 0 23.5px 9px 23.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.name {
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #022826;
}
</style>
