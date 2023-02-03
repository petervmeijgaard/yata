<template>
  <div :class="$style['input-group']">
    <slot />
  </div>
</template>

<style lang="scss" module>
.input-group {
  display: flex;
  border-radius: 0.5rem;
  border: 1px solid #bfe6ff;
  overflow: hidden;
  flex: 1;
  background-color: #fff;
  align-items: center;
}
</style>
