<script setup lang="ts">
import type { Component } from "vue";
import Github from "@/assets/icons/github.svg?component";
import Linkedin from "@/assets/icons/linkedin.svg?component";

const { member } = defineProps<{ member: Member }>();

const linkTypes: Record<
  MemberLinkType,
  { logo: Component; url: (v: string) => string }
> = {
  linkedin: {
    logo: Linkedin,
    url: (value: string) => `https://www.linkedin.com/in/${value}`,
  },
  github: {
    logo: Github,
    url: (value: string) => `https://github.com/${value}`,
  },
};

const links = Object.entries(linkTypes)
  .filter(([key]) => member.links[key as MemberLinkType] != null)
  .map(([key, value]) => ({
    key,
    logo: value.logo,
    href: value.url(member.links[key as MemberLinkType]!),
  }));
</script>

<template>
  <div class="container">
    <div class="info">
      <img
        :src="'/img/profil/' + member.profile"
        width="80"
        height="80"
        :alt="'Photo de profil ' + member.name"
      />
      <p class="name">{{ member.name }}</p>
      <p v-if="member.company" class="company">{{ member.company }}</p>
    </div>
    <div class="links" v-if="links">
      <a
        v-for="link in links"
        :key="link.key"
        :href="link.href"
        target="_blank"
        :aria-label="link.key + ' de ' + member.name"
      >
        <Component :is="link.logo" width="24" height="24" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

img {
  border-radius: 50%;
  border: solid 3px #87ccff;
}

.name {
  font-weight: bold;
  margin-top: 0.5rem;
  font-size: 1.125rem;
}

.company {
  font-size: 0.875rem;
  text-align: center;
}

.links {
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 0.5rem;
  height: 2.5rem;
}
</style>
