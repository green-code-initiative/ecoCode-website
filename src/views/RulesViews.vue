<script lang="ts" setup>
import TriangleAlertIcon from "@/assets/icons/triangle-alert.svg";
import RulesFilters from "@/components/rules/RulesFilters.vue";
import RuleCard from "@/components/rules/RuleCard.vue";
import { useRuleFilters } from "@/composables/rule-filters";

const { items, meta } = (await fetch(import.meta.env.VITE_RULES_URL).then(
  (res) => res.json(),
)) as RuleList;

const { filters, filteredRules } = useRuleFilters({ items, meta });
</script>

<template>
  <div class="hero">
    <div class="container">
      <h1>Our rule repository</h1>
    </div>
  </div>
  <div class="container">
    <div class="alpha-alert">
      <TriangleAlertIcon />
      <p>
        This page is still <strong>under construction</strong>. Everything is
        subject to change before the final version!
      </p>
    </div>
    <div class="content">
      <RulesFilters :meta="meta" class="filters" v-model="filters" />
      <div class="rules">
        <p class="counter">
          <span v-if="filteredRules.length !== items.length">
            Showing {{ filteredRules.length }} of {{ items.length }} rules
          </span>
          <span v-else>Showing {{ items.length }} rules</span>
        </p>

        <template v-for="rule in filteredRules" :key="rule.id">
          <RuleCard :rule="rule" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 4rem 0;
  background-color: var(--color-primary-container);
  box-shadow: var(--shadow-border-small);

  h1 {
    font-weight: 900;
  }

  @media (min-width: 1144px) {
    padding: 4rem 2rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  max-width: 1080px;
  gap: 1.5rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .filters {
      display: none;
    }

    .rules {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .counter {
        color: var(--color-on-surface-bright);
      }
    }

    @media (min-width: 920px) {
      flex-direction: row;
      align-items: start;

      .filters {
        display: flex;
        flex: 1 0 22%;
      }

      .rules {
        flex: 1 1 78%;
      }
    }
  }

  @media (min-width: 1112px) {
    margin: 0 auto;
  }
}

.alpha-alert {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  border-radius: var(--radius);
  background-color: var(--color-warning-container);
  margin: 2rem 0 1rem;
  padding: 1rem;

  svg {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-on-warning-container);
  }
}
</style>
