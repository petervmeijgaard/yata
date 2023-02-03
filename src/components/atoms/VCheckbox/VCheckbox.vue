<template>
  <label :class="$style.checkbox">
    <slot />
  </label>
</template>

<style lang="scss" module>
.checkbox {
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}
</style>
