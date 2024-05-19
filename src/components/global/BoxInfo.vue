<script setup lang="ts">
defineProps<{ title: string; text: string }>();
</script>

<template>
  <div class="container-block">
    <h3 class="heading-3">{{ title }}</h3>
    <div class="container">
      <div class="container-text">{{ text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heading-3 {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.right {
    padding: 0 67px 10px 0;
}

.left {
    padding: 0 67px 10px 0;
}

.middle {
    padding: 0 0 10px 0;
}

.container-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 10.5px 0 10.5px;
}

.container-text {
    width: 257px;
    height: 197px;
    padding: 0 19px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-border-small);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    background-color: var(--color-surface);
    margin-top: 10px;
}

.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.container>img {
    width: 48px;
    height: auto;
    margin: 0 16px 0 16px;
}

.container-block>img {
    width: 48px;
    height: auto;
    margin: 17px 0 17px 0;
}
</style>
