<template>
  <component
    :is="as"
    name="fade"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'Fade',

  props: {
    isGroup: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    as() {
      return this.isGroup
        ? 'transition-group'
        : 'transition';
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
