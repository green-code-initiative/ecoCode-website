<script setup lang="ts">
defineEmits(['update:modelValue'])
defineOptions({ inheritAttrs: false })
withDefaults(
    defineProps<{ id: string; label: string; modelValue: string; type?: string; centered?: boolean }>(),
    { type: 'text', centered: false }
)
</script>

<template>
  <div class="app-textfield">
    <label :for="id" :class="centered ? 'centered' : ''">{{ label }}</label>
    <input
        v-if="type !== 'textarea'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :type="type"
        :id="id"
        v-bind="$attrs"
    />
    <textarea
        v-else
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :id="id"
        v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss">
.app-textfield {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > label {
    color: var(--color-primary);
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;

    &.centered {
      text-align: center;
    }
  }

  & > input,
  & > textarea {
    appearance: none;
    height: 56px;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid 1px #d8dae5;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    transition: box-shadow .08s ease-in-out;

    &:focus, &:focus-within {
      border-color: var(--color-primary-lighter);
      box-shadow: var(--color-primary-focus-ring) 0 0 0 3px;
    }
  }

  & > textarea {
    height: 135px;
    resize: none;
  }
}
</style>
