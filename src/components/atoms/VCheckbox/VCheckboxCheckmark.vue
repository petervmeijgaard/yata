<template>
  <CheckIcon :class="$style['checkbox-checkmark']" />
</template>

<script lang="ts" setup>
import CheckIcon from 'virtual:icons/fa6-solid/check';
</script>

<style lang="scss" module>
.checkbox-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.25rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  background-color: #fff;
  color: #fff;
  border: 1px solid #bfe6ff;
  transition: background-color ease-in-out 250ms, border-color ease-in-out 250ms;
}
</style>
