<script lang="ts" setup>
import RuleFilterItem from "@/components/rules/RuleFilterItem.vue";
import type { RuleFilters } from "@/composables/rule-filters";

const { meta } = defineProps<{ meta: RuleMeta }>();
const filters = defineModel<RuleFilters>({ required: true });
</script>

<template>
  <div class="filters">
    <div class="filter-type">
      <h2>Technologies</h2>
      <div class="filter-items">
        <RuleFilterItem
          v-for="tech in meta.technologies"
          :key="tech"
          :id="tech"
          :label="tech"
          v-model="filters.technologies[tech]"
        />
      </div>
    </div>
    <div class="filter-type">
      <h2>Severities</h2>
      <div class="filter-items">
        <RuleFilterItem
          v-for="severity in meta.severities"
          :key="severity"
          :id="severity"
          :label="severity"
          v-model="filters.severities[severity]"
        />
      </div>
    </div>
    <div class="filter-type">
      <h2>Statuses</h2>
      <div class="filter-items">
        <RuleFilterItem
          v-for="status in meta.statuses"
          :key="status"
          :id="status"
          :label="status"
          v-model="filters.statuses[status]"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .filter-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 1rem;
    }
  }

  .filter-items {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
