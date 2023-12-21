<script setup lang="ts">
import BoxInfo from "@/components/global/BoxInfo.vue";
defineProps<{ title: string }>();
</script>

<template>
  <div class="container">
    <h2 class="heading-2">{{ title }}</h2>
    <div class="box-container">
      <BoxInfo
        title="Cadrage"
        text="Définition des règles à produire et contractualisation"
      />
      <BoxInfo
        title="production"
        text="Production des règles par notre équipe interne"
      />
      <BoxInfo
        title="Test"
        text="Test des règles produites pour s’assurer de leur efficacité dans la réduction de la consommation énergétique"
      />
      <BoxInfo
        title="Livraison"
        text="Test des règles produites pour s’assurer de leur efficacité dans la réduction de la consommation énergétique"
      />
    </div>
    <span
      >Toutes les règles sur-mesure, produites pour le compte d'organisations, tombent
      dans l'Open Source. C'est votre contribution à rendre le numérique plus
      responsable.</span
    >
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 396px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f3f3f3;
}

.box-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 0 35px 0;
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

@media screen and (max-width: 768px) {
  span{
    margin: 0 50px 0 50px;
    font-size: 15px;
  }
}
</style>
