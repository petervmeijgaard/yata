<template>
  <input :class="$style['text-input']" />
</template>

<script>
export default {
  name: 'VTextInput',
};
</script>

<style lang="scss" module>
.text-input {
  font-size: 1.25rem;
  padding: 1rem;
  display: inline-flex;
  background-color: #fff;
  flex: 1;
  min-width: 0;
}
</style>
