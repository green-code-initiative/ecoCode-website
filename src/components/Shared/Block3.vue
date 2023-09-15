<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div class="box-container">
      <BoxInfo
        title="Cadrage"
        text="Définition des règles à produire et contractualisation"
      ></BoxInfo>
      <BoxInfo
        title="production"
        text="Production des règles par notre équipe interne"
      ></BoxInfo>
      <BoxInfo
        title="Test"
        text="Test des règles produites pour s’assurer de leur efficacité dans la réduction de la consommation énergétique"
      >
      </BoxInfo>
      <BoxInfo
        title="Livraison"
        text="Test des règles produites pour s’assurer de leur efficacité dans la réduction de la consommation énergétique"
      >
      </BoxInfo>
    </div>
    <span
      >Toutes les règles sur-mesure, produites pour le compte d'organisations, tombent
      dans l'Open Source. C'est votre contribution à rendre le numérique plus
      responsable.</span
    >
  </div>
</template>
<script setup lang="ts">
import BoxInfo from "@/components/global/BoxInfo.vue";
const props = defineProps({
  title: String,
});
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 396px;
  padding-top: 50px;
  height: max-content;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f3f3f3;
}

.title {
  max-width: 1089px;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #355086;
  padding: 0px 0 0 0;
}

.box-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 0px 35px 0px;
}

span {
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #022826;
  max-width: 1089px;
  padding-bottom: 47px;
}


@media screen and (max-width: 1150px) {

  .title{
      margin: 0 36px 0 36px;
      font-size: 32px;
  }

}

@media screen and (max-width: 768px) {

  .title{
      margin: 0 36px 0 36px;
      font-size: 28px;
  }

  span{
    margin: 0 50px 0 50px;
    font-size: 15px;
  }
}
</style>
