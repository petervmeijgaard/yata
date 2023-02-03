<template>
  <component :is="as" name="fade">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  isGroup?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  isGroup: false,
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
