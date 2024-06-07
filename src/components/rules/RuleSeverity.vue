<script lang="ts" setup>
import CircleChevronDownIcon from "@/assets/icons/circle_chevron_down.svg?component";
import CircleChevronUpIcon from "@/assets/icons/circle_chevron_up.svg?component";
import InfoIcon from "@/assets/icons/info.svg?component";
import { type Component, computed } from "vue";

const icons: Record<Rule["severity"], Component> = {
  INFO: InfoIcon,
  MINOR: CircleChevronDownIcon,
  MAJOR: CircleChevronUpIcon,
  CRITICAL: CircleChevronUpIcon,
} as const;

const props = defineProps<{ severity: Rule["severity"] }>();
const icon = computed(() => icons[props.severity]);
</script>

<template>
  <div class="rule-severity" :class="severity.toLowerCase()">
    {{ severity.charAt(0).toUpperCase() + severity.slice(1).toLowerCase() }}
    <component :is="icon" />
  </div>
</template>

<style lang="scss" scoped>
.rule-severity {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: rgba(var(--background-color), 0.5);

  svg {
    width: 20px;
    height: 20px;
    color: rgb(var(--icon-color));
  }

  &.info,
  &.minor {
    --background-color: 133, 218, 255;
    --icon-color: 57, 98, 115;
  }

  &.major {
    --background-color: 255, 206, 133;
    --icon-color: 151, 116, 63;
  }

  &.critical {
    --background-color: 255, 133, 133;
    --icon-color: 151, 68, 63;
  }
}
</style>
