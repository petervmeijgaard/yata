<template>
  <i :class="classNames" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  isFixedWidth: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const classNames = computed(() => {
  const baseClassNames = ['fas', `fa-${props.icon}`];

  if (props.isFixedWidth) {
    return [...baseClassNames, `fa-${props.icon}`];
  }

  return baseClassNames;
});
</script>
