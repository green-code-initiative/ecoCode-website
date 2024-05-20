<script lang="ts" setup>
import BoxInfo from "@/components/global/BoxInfo.vue";
import AppSection from "@/components/shared/AppSection.vue";
</script>

<template>
  <AppSection backgroundColor="grey" title="Le processus de création d'une règle">
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
    <p>
      Toutes les règles sur-mesure, produites pour le compte d'organisations, tombent
      dans l'Open Source. C'est votre contribution à rendre le numérique plus
      responsable.
    </p>
  </AppSection>
</template>

<style scoped>
.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem;
}

p {
  font-size: 1.35rem;
  font-weight: bold;
  text-align: center;
  max-width: 1089px;
}

@media screen and (max-width: 768px) {
  p {
    margin: 0 50px 0 50px;
    font-size: 1rem;
  }
}
</style>
