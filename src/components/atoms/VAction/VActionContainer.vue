<template>
  <div :class="$style['action-container']">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VActionContainer',
};
</script>

<style lang="scss" module>
.action-container {
  display: flex;
  margin-left: 0.5rem;
}
</style>
