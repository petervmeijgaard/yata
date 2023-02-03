<template>
  <div :class="$style['action-container']">
    <slot />
  </div>
</template>

<style lang="scss" module>
.action-container {
  display: flex;
  margin-left: 0.5rem;
}
</style>
