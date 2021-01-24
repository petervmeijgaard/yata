<template>
  <div :class="$style['action-container']">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ActionContainer',
};
</script>

<style lang="scss" module>
.action-container {
  display: flex;
  margin-left: .5rem;
}
</style>
