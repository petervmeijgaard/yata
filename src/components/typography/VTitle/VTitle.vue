<template>
  <component :is="as" :class="$style['title']">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VTitle',

  props: {
    as: {
      type: String,
      required: false,
      default: 'h1',
    },
  },
};
</script>

<style lang="scss" module>
.title {
  font-size: 2rem;
  color: #0af;
  padding: 2rem 0;
  font-weight: bold;
}
</style>
