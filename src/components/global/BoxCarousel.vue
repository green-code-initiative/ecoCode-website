<template>
    <div class="container">
        <div class="box-container" v-for="partenaire in tabPartenaire">
            <img :src="partenaire.logo" :alt="partenaire.alt" :width="partenaire.width" :height="partenaire.height" />
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import Davidson from "/img/logo/logo-davidson.jpg";
import Snapp from "/img/logo/logo-snapp-carousel.webp";
import PageJaunes from "/img/logo/logo-page-jaune.webp";
import Pau from "/img/logo/logo-pau-carousel.jpg";
import inside from "/img/logo/logo-inside.png";
const tabPartenaire = [
    {
        id: 1,
        logo: Davidson,
        alt: "logo Davidson",
        width: 160.2,
        height: 40,
        name: "Davidson",
    },
    {
        id: 2,
        logo: Snapp,
        alt: "logo Snapp",
        width: 160,
        height: 71.84,
        name: "Snapp'",
    },
    {
        id: 3,
        logo: PageJaunes,
        alt: "Logo Page Jaunes",
        width: 141,
        height: 40,
        name: "Pages Jaunes",
    },
    {
        id: 4,
        logo: Pau,
        alt: "logo UPPA",
        width: 160,
        height: 71.84,
        name: "UPPA",
    },
    {
        id: 5,
        logo: inside,
        alt: "logo  inside|app",
        width: 160,
        height: 71.84,
        name: "inside|app",
    },
];
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 37px 0 0 0;
}

.box-container {
    width: 180px;
    height: 100px;
    padding: 21px 48.7px 21px 48.7px;
    border-radius: 10px;
    border: solid 1px #87ccff;
    margin: 23px 23.5px 0 23.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

</style>
