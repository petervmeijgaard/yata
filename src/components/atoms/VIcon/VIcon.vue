<template>
  <i :class="classNames" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  icon: string;
  isFixedWidth?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  isFixedWidth: false,
});

const classNames = computed(() => {
  const baseClassNames = ['fas', `fa-${props.icon}`];

  if (props.isFixedWidth) {
    return [...baseClassNames, `fa-${props.icon}`];
  }

  return baseClassNames;
});
</script>
