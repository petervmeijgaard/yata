<template>
  <ul :class="$style['todo-container']">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'VTodoContainer',
};
</script>

<style lang="scss" module>
.todo-container {
  display: flex;
  flex-direction: column;
}
</style>
