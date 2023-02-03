<template>
  <input type="checkbox" :class="$style['checkbox-control']" :checked="checked" />
</template>

<script>
export default {
  name: 'VCheckboxControl',

  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.checkbox-control {
  display: none;
}
</style>
