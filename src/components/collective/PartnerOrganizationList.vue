<script setup lang="ts">
import organizations from '@/assets/data/partner-organizations.json';
import PartnerOrganization from '@/components/collective/PartnerOrganization.vue';

const props = defineProps<{ featured: boolean }>()
const filteredOrganizations = props.featured
    ? organizations
        .filter(organization => organization.featured)
        .sort((organization1, organization2) => organization1.featured! - organization2.featured!)
    : organizations
</script>

<template>
  <div class="partner-organization-list">
    <PartnerOrganization
        v-for="organization in filteredOrganizations"
        :key="organization.name"
        :name="organization.name"
        :logo="{ filename: organization.img, width: organization.width, height: organization.height }"
    />
  </div>
</template>

<style scoped lang="scss">
.partner-organization-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 1rem 0;
  gap: 2.5rem;
  max-width: 1140px;
  width: 100%;
}
</style>
