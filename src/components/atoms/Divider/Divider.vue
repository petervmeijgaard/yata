<template>
  <hr :class="$style.divider" />
</template>

<script>
export default {
  name: 'Divider',
};
</script>

<style lang="scss" module>
.divider {
  height: 1px;
  background-color: #0af;
  border: 0;
  margin: 2rem 0;
}
</style>
