<template>
  <component
    :is="as"
    :class="[$style['todo-content'], classNames]"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'TodoContent',

  props: {
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
  },

  computed: {
    as() {
      return this.editMode ? 'input' : 'div';
    },

    classNames() {
      return {
        [this.$style['is-checked']]: this.isChecked,
        [this.$style['edit-mode']]: this.editMode,
      };
    },
  },
};
</script>

<style lang="scss" module>
.todo-content {
  font-size: 1.25rem;
  text-decoration: line-through;
  text-decoration-color: transparent;
  color: #002640;
  display: flex;
  padding: .5rem 0;
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
