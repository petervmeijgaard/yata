<template>
  <form :class="$style.form">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style lang="scss" module>
.form {
  display: flex;
  flex: 1;
  min-width: 0;
}
</style>
