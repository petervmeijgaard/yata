<template>
  <div :class="$style['input-group']">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
};
</script>

<style lang="scss" module>
.input-group {
  display: flex;
  border-radius: .5rem;
  border: 1px solid #bfe6ff;
  overflow: hidden;
  flex: 1;
  background-color: #fff;
  align-items: center;
}
</style>
