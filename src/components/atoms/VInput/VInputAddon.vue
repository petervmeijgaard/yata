<template>
  <button :class="$style['input-addon']" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  disabled?: boolean;
};

withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<style lang="scss" module>
.input-addon {
  display: inline-flex;
  padding: 0 1rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: #0af;
  border: 0;
  height: 100%;
  align-items: center;
  transition: background-color ease-in-out 250ms, color ease-in-out 250ms;
  flex: 0;

  &[disabled] {
    color: #666666;
    background-color: #e6e6e6;

    &:hover {
      cursor: not-allowed;
      background-color: #e6e6e6;
    }
  }

  &:hover {
    background-color: #1ab2ff;
  }
}
</style>
