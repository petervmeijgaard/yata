<template>
  <i :class="classNames"/>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    icon: {
      type: String,
      required: true,
    },

    isFixedWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    classNames() {
      const classNames = ['fas'];

      classNames.push(`fa-${this.icon}`);

      if (this.isFixedWidth) {
        classNames.push('fa-fw');
      }

      return classNames;
    },
  },
};
</script>
