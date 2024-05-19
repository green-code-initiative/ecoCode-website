<script lang="ts" setup>
defineEmits(['update:modelValue'])
defineProps<{ modelValue: boolean }>()
</script>

<template>
  <button :class="{ active: modelValue }" @click="$emit('update:modelValue', !modelValue)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path class="top-line" fill-rule="evenodd" d="m3 12 1-1h16a1 1 0 1 1 0 2H4l-1-1Z" clip-rule="evenodd"/>
      <path class="middle-line" fill-rule="evenodd" d="m3 6 1-1h16a1 1 0 1 1 0 2H4L3 6Z" clip-rule="evenodd"/>
      <path class="bottom-line" fill-rule="evenodd" d="m3 18 1-1h16a1 1 0 1 1 0 2H4l-1-1Z" clip-rule="evenodd"/>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: block;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0.75rem;
  width: 48px;
  height: 48px;

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
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(-6px) rotate(45deg) scale(0.9);
  }
}

@keyframes down-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(0);
  }
  100% {
    transform: translateY(0) rotate(-45deg) scale(0.9);
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
