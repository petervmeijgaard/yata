<template>
  <label :class="$style.checkbox">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
};
</script>

<style lang="scss" module>
.checkbox {
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}
</style>
