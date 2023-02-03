<template>
  <component :is="as" name="fade">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isGroup: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const as = computed(() => (props.isGroup ? 'transition-group' : 'transition'));
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
