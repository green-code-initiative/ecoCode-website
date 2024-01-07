<script lang="ts" setup>
defineEmits(['update:modelValue'])
defineProps<{ modelValue: boolean }>()
</script>

<template>
  <button :class="{ active: modelValue }" @click="$emit('update:modelValue', !modelValue)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40">
      <g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
        <path class="top-line" d="M10 10h40Z"/>
        <path class="middle-line" d="M10 20h40Z"/>
        <path class="bottom-line" d="M10 30h40Z"/>
      </g>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;
  width: 48px;

  svg {
    path {
      transform-box: fill-box;
      transform-origin: center;
    }
  }

  &.active svg {
    .top-line {
      animation: down-rotate 0.6s ease-out both;
    }
    .bottom-line {
      animation: up-rotate 0.6s ease-out both;
    }
    .middle-line {
      animation: hide 0.6s ease-out forwards;
    }
  }
}

@keyframes up-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }
}

@keyframes down-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }
}

@keyframes hide {
  29% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
