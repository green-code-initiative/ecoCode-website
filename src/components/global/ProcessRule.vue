<template>
  <div class="container-block">
    <h2 class="title" :class="computedTitleClass">{{ title }}</h2>
    <div class="container">
      <div :style="subtitleStyle" class="container-text">
        <a
          v-if="image === 'true'"
          href="https://github.com/green-code-initiative"
          target="_blank"
          >
          <span>{{ text }}</span>
          <img width="120" height="32" src="@/assets/img/github.webp" alt="GitHub logo"/>
        </a>
        <span v-else>{{ text }}</span>
      </div>
      <ArrowRight v-if="showRightArrow" class="arrow-icon" />
      <ArrowLeft v-if="showLeftArrow" class="arrow-icon" />
    </div>
    <ArrowDown v-if="showBottomArrow && !isLastItem" class="arrow-icon" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import ArrowDown from '@/assets/icons/arrow_down.svg';
import ArrowLeft from '@/assets/icons/arrow_left.svg';
import ArrowRight from '@/assets/icons/arrow_right.svg';

const props = defineProps({
  title: String,
  text: String,
  position: String,
  titlePosition: String,
  opacity: Number,
  image: String,
});

const path = ref("/");
const route = useRoute();

const isPage = computed(
  () =>
    route.path === "/contributeur" ||
    route.path === "/entreprise" ||
    route.path === "/team"
);

const subtitleStyle = computed(() => ({
  backgroundColor: isPage.value ? `rgba(135, 204, 255, ${props.opacity})` : "white",
  border: isPage.value ? "solid 2px #87ccff" : "solid 2px rgba(135, 204, 255, 0)",
}));

const isMobile = ref(false);

const computedTitleClass = computed(() => {
  switch (props.titlePosition) {
    case "middle":
      return "middle";
    case "left":
      return "left";
    case "right":
      return "right";
    default:
      return "";
  }
});

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 1150;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});

const showRightArrow = computed(() => props.position === "right" && !isMobile.value);
const showLeftArrow = computed(() => props.position === "left" && !isMobile.value);
const showBottomArrow = computed(() => props.position === "bottom" || isMobile.value);

const isLastItem = ref(false);
if (props.title === "utilisation" || props.image) {
  isLastItem.value = true;
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 25px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #57c18b;
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
}

.container-text {
  width: 310px;
  height: 140px;
  padding: 0 19px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #022826;

    > img {
      margin-top: 1rem;
    }
  }
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.arrow-icon {
  width: 48px;
  height: 48px;
  color: #355086;
}

.container > .arrow-icon {
  margin: 0 16px;
}

.container-block > .arrow-icon {
  margin: 17px 0;
}

@media screen and (max-width: 1150px) {
  .right {
    padding: 0 0 10px 0;
  }
  .left {
    padding: 0 0 10px 0;
  }
}

@media screen and (max-width: 768px) {

  .title{
    font-size: 22px;
  }

  .container-text > span{
    font-size: 17px;
  }
}
</style>
