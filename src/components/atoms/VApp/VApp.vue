<template>
  <div :class="$style['app']">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VApp',
};
</script>

<style lang="scss" module>
.app {
  padding: 2rem;
  min-height: 100vh;
  background-color: #e6f7ff;
}
</style>
