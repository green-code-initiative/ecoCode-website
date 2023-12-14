<template>
    <div id="tabs">
        <div class="section-1">
            <span @click="activateTab('membre')" :class="{ 'active': activeTab === 'membre' }">Membres contributeurs</span>
            <span @click="activateTab('entreprise')" :class="{ 'active': activeTab === 'entreprise' }">Organisations partenaires</span>
        </div>
        <div style="padding-bottom: 50px;" v-if="activeTab === 'membre'" id="membre">
            <TitleBox typetitle="title blue" title="Core team" subtitle="L'équipe qui pilote ecoCode">
                <EspaceMembre team="core team"></EspaceMembre>
            </TitleBox>
            <div style="background-color: #F3F3F3; margin-top: 50px; padding-bottom:50px">
                <TitleBox typetitle="title blue" title="Contributrices et contributeurs">
                    <EspaceMembre team="contributeur team"></EspaceMembre>
                </TitleBox>
            </div>
        </div>
        <div style="padding-bottom: 50px;" v-else id="entreprise">
            <TitleBox typetitle="title blue" title="De nombreuses organisations s'impliquent sur ecoCode">
              <PartnerOrganizationList :featured="false" />
            </TitleBox>
        </div>
    </div>
</template>

<script setup lang="ts">
import PartnerOrganizationList from '@/components/collective/PartnerOrganizationList.vue';
import TitleBox from '@/components/global/Title.vue';
import EspaceMembre from '@/components/global/BoxMembre.vue';
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
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

.active {
    opacity: 1 !important;
    text-decoration: underline;
    text-underline-offset: 15px;
}
</style>
