<template>
  <component :is="as" :class="[$style['todo-content'], classNames]">
    <slot />
  </component>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const cssModule = useCssModule();

const props = defineProps({
  isChecked: {
    type: Boolean,
    required: false,
    default: false,
  },

  editMode: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const as = computed(() => (props.editMode ? 'input' : 'div'));

const classNames = computed(() => ({
  [cssModule['is-checked']]: props.isChecked,
  [cssModule['edit-mode']]: props.editMode,
}));
</script>

<style lang="scss" module>
.todo-content {
  font-size: 1.25rem;
  text-decoration: line-through;
  text-decoration-color: transparent;
  color: #002640;
  display: flex;
  padding: 0.5rem 0;
  flex: 1;
  word-break: break-all;
  transition: color ease-in-out 250ms, text-decoration-color ease-in-out 250ms;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}

.is-checked {
  color: #607880;
  text-decoration-color: #607880;
}

.edit-mode {
  border-bottom: 1px dashed #0af;
}
</style>
