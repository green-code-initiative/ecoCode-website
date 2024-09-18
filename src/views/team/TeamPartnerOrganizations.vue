<script setup lang="ts">
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import AppSection from "@/components/shared/AppSection.vue";
</script>

<template>
  <AppSection title="De nombreuses organisations s'impliquent sur ecoCode">
    <PartnerOrganizationList :featured="false" />
  </AppSection>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 50px;
}
</style>
