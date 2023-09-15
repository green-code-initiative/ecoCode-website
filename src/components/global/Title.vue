<template>
  <div :style="{ backgroundColor: colorBackground }">
    <div class="container">
      <img v-if="image === 'true'" class="logo-img" src="/img/logo/logo-accueil.webp" />
      <span :class="getTitleClass">{{ title }}</span>
      <span :class="getSubtitleClass">{{ subtitle }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  typetitle: String,
  colorBackground: String,
  image: String,
});

const getTitleClass = computed(() => {
  if (props.typetitle === "title blue") {
    return "title-blue";
  } else if (props.typetitle === "white black") {
    return "title-white";
  } else if (props.typetitle === "full white") {
    return "title-white";
  } else if (props.typetitle === "blue black light") {
    return "title-blue";
  }
});

const getSubtitleClass = computed(() => {
  if (props.typetitle === "title blue") {
    return "subtitle-green";
  } else if (props.typetitle === "white black") {
    return "subtitle-black";
  } else if (props.typetitle === "full white") {
    return "subtitle-white";
  } else if (props.typetitle === "blue black light") {
    return "subtitle-black-light";
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding-top: 50px;
  height: max-content;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-blue {
  max-width: 1200px;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  padding: 0px 0 0 0;
  color: #355086;
}

.title-white {
  max-width: 1200px;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  padding: 30px 0 0 0;
  color: white;
}

.subtitle-green {
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  padding: 53px 0 0 0;
  color: #57c18b;
  max-width: 1050px;
}

.subtitle-white {
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  padding: 23px 0 36px 0;
  color: white;
  max-width: 1050px;
}

.subtitle-black {
  font-size: 22px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  padding: 53px 0 0 0;
  color: #022826;
  max-width: 1050px;
}

.subtitle-black-light {
  font-size: 22px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  padding: 23px 0 0 0;
  color: #022826;
}

.logo-img {
  width: 358px;
  height: auto;
  padding: 0px 0 40px 0;
}

@media screen and (max-width: 1150px) {
  .title-blue,
  .title-white {
    margin: 0 36px 0 36px;
    font-size: 32px;
    padding-top: 0px;
  }

  .subtitle-white,
  .subtitle-black,
  .subtitle-green,
  .subtitle-black-light {
    margin: 10px 36px 0 36px;
    font-size: 25px;
    padding: 0 0 0 0;
  }

  .subtitle-white {
    padding-bottom: 25px;
  }
}

@media screen and (max-width: 768px) {
  .logo-img {
    width: 50%;
    margin: 0 36px 0 36px;
    padding-bottom: 20px;
  }

  .title-blue,
  .title-white {
    margin: 0 36px 0 36px;
    font-size: 28px;
    padding-top: 0px;
  }

  .subtitle-white,
  .subtitle-black,
  .subtitle-green,
  .subtitle-black-light {
    margin: 10px 36px 0 36px;
    font-size: 20px;
    padding: 0 0 0 0;
  }
}

@media screen and (max-width: 768px) {

  .title-blue,
  .title-white {
    margin: 0 36px 0 36px;
    font-size: 25px;
    padding-top: 0px;
  }

  .subtitle-white,
  .subtitle-black,
  .subtitle-green,
  .subtitle-black-light {
    margin: 10px 36px 0 36px;
    font-size: 15px;
    padding: 0 0 0 0;
  }
}
</style>
