<script setup lang="ts">
import MemberComponent from '@/components/collective/Member.vue';

defineProps<{ members: Member[] }>()
</script>

<template>
  <div class="member-list">
    <MemberComponent v-for="member in members" :key="member.name" :member="member" />
  </div>
</template>

<style scoped lang="scss">
.member-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 1rem 1rem;
  gap: 2.5rem 0.8rem;
  max-width: 900px;
  width: 100%;

  & > div {
    width: 165px;
  }

  @media (min-width: 796px) {
    gap: 2.5rem;
  }
}
</style>
