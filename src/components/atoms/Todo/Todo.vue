<template>
  <li :class="$style.todo">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'Todo',
};
</script>

<style lang="scss" module>
.todo {
  background-color: #fff;
  display: flex;
  margin-top: .25rem;
  border: 1px solid #bfe6ff;
  padding: 1rem;
  align-items: center;

  &:first-child {
    margin-top: 0;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }

  &:last-child {
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
}
</style>
