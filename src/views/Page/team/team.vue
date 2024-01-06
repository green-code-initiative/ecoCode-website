<template>
  <div id="tabs">
    <div class="section-1">
      <span @click="activateTab('membre')" :class="{ 'active': activeTab === 'membre' }">Membres contributeurs</span>
      <span @click="activateTab('entreprise')" :class="{ 'active': activeTab === 'entreprise' }">Organisations partenaires</span>
    </div>
    <div v-if="activeTab === 'membre'">
      <AppSection title="Core team" sub-title="L'équipe qui pilote ecoCode">
        <MemberList :members="coreMembers"/>
      </AppSection>

      <AppSection title="Contributrices et contributeurs" background-color="grey">
        <MemberList :members="contributors"/>
      </AppSection>
    </div>
    <div v-else class="partner-section">
      <AppSection title="De nombreuses organisations s'impliquent sur ecoCode">
        <PartnerOrganizationList :featured="false"/>
      </AppSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import contributors from '@/assets/data/contributors.json';
import coreMembers from '@/assets/data/core-members.json';
import MemberList from '@/components/collective/MemberList.vue';
import PartnerOrganizationList from '@/components/collective/PartnerOrganizationList.vue';
import AppSection from '@/components/Shared/AppSection.vue';

const activeTab = ref('membre');
const route = useRoute();

const activateTab = (tabName: string) => {
  activeTab.value = tabName;
};

watch(() => route.query.tab, (newTab) => {
  if (newTab === 'membre' || newTab === 'entreprise') {
    activateTab(newTab);
  }
});

onMounted(() => {
  const initialTab = route.query.tab as string;
  if (initialTab === 'membre' || initialTab === 'entreprise') {
    activateTab(initialTab);
  }
});
</script>

<style lang="scss" scoped>
@import './scss/style.scss';

.partner-section {
  margin-bottom: 50px;
}

.active {
  opacity: 1 !important;
  text-decoration: underline;
  text-underline-offset: 15px;
}
</style>
