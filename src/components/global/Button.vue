<template>
  <div class="container-button">
    <span v-if="title">{{ title }}</span>
    <span v-else class="empty"></span>
    <button @click="navigateToRoute()" :class="buttonClass">
      <ChevronLeft/>
      {{ text }}
      <ChevronRight/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ChevronLeft from '@/assets/icons/chevron_left.svg';
import ChevronRight from '@/assets/icons/chevron_right.svg';
import router from '@/router';

// Déclarez les props
const props = defineProps({
  text: String,
  title: String,
  typebutton: String,
  link: String,
});

const navigateToRoute = () => {
  if (props.link) {
    router.push(props.link);
  }
};

const buttonClass = computed(() => {
  if (props.typebutton === "blue") {
    return "button blue";
  } else {
    return "button white";
  }
});
</script>

<style lang="scss" scoped>
.container-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .empty {
    padding: 30px 0 8px 0;
  }

  span {
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    text-transform: uppercase;
    color: #355086;
    padding: 0 0 8px 0;
  }

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8.4px 13px 10px;
    border-radius: 12px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.24px;
    margin: 0 82.5px 0 82.5px;
  }
}

button:hover {
  cursor: pointer;
}

.blue {
  background-color: #355086;
  border: 2px solid white;
  color: white;
}

.white {
  background-color: white;
  border: 2px solid #57c18b;
  color: #355086;
}

@media screen and (max-width: 768px) {
  .button {
    margin: 0 19px 0 19px !important;
  }

  .container-button > .button {
    font-size: 18px;
  }
}
</style>
