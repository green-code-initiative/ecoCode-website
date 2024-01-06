<script setup lang="ts">
import contributors from "@/assets/data/contributors.json";
import coreMembers from "@/assets/data/core-members.json";
import MemberList from "@/components/collective/MemberList.vue";
import AppSection from "@/components/Shared/AppSection.vue";
</script>

<template>
  <AppSection title="Core team" sub-title="L'équipe qui pilote ecoCode">
    <MemberList :members="coreMembers"/>
  </AppSection>

  <AppSection title="Contributrices et contributeurs" background-color="grey">
    <MemberList :members="contributors"/>
  </AppSection>
</template>
