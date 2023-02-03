<template>
  <ul :class="$style['todo-container']">
    <slot />
  </ul>
</template>

<style lang="scss" module>
.todo-container {
  display: flex;
  flex-direction: column;
}
</style>
