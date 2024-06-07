import { computed, ref } from "vue";

const createDefaultState = (values: string[]): Record<string, boolean> => {
  return values.reduce((acc, value) => ({ ...acc, [value]: false }), {});
};

const isFilterEnabled = (filter: RuleFilter): boolean => {
  return Object.values(filter).some((value) => value);
};

export type RuleFilter = Record<string, boolean>;

export type RuleFilters = {
  technologies: RuleFilter;
  severities: RuleFilter;
  statuses: RuleFilter;
};

export const useRuleFilters = ({ items, meta }: RuleList) => {
  const filters = ref({
    technologies: createDefaultState(meta.technologies),
    severities: createDefaultState(meta.severities),
    statuses: createDefaultState(meta.statuses),
  });

  const filteredRules = computed(() => {
    const { technologies, severities, statuses } = filters.value;
    return items.filter(
      (item) =>
        (!isFilterEnabled(technologies) ||
          item.technologies.some((tech) => technologies[tech])) &&
        (!isFilterEnabled(severities) || severities[item.severity]) &&
        (!isFilterEnabled(statuses) || statuses[item.status]),
    );
  });

  return { filters, filteredRules };
};
