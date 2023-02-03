<template>
  <button :class="[$style.action, classNames]">
    <slot />
  </button>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const cssModule = useCssModule();

const props = defineProps({
  isDanger: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const classNames = computed(() => ({
  [cssModule['is-danger']]: props.isDanger,
}));
</script>

<style lang="scss" module>
.action {
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #bfe6ff;
  color: #007fbf;
  transition: background-color ease-in-out 250ms;
  margin-left: 0.5rem;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background-color: #b3ddf2;
  }
}

.is-danger {
  color: #bf1900;
  background-color: #ffc8bf;

  &:hover {
    background-color: #f2bcb3;
  }
}
</style>
