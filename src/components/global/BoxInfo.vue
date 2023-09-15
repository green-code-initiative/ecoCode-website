<template>
    <div class="container-block">
        <h3 class="title">{{ title }}</h3>
        <div class="container">
            <div class="container-text">{{ text }}</div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from 'vue-router';


const props = defineProps({
    title: String,
    text: String,
});
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
    margin: 25px 10.5px 0 10.5px;
}

.container-text {
    width: 257px;
    height: 197px;
    padding: 0 19px;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: solid 2px rgba(135, 204, 255, 0);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    background-color: white;
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
