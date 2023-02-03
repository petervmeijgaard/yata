<template>
  <span :class="$style['checkbox-checkmark']" />
</template>

<style lang="scss" module>
.checkbox-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  background-color: #fff;
  border: 1px solid #bfe6ff;
  transition: background-color ease-in-out 250ms, border-color ease-in-out 250ms;

  &::after {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #fff;
    content: '\f00c';
    position: absolute;
    top: 0.375rem;
    left: 0.375rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    transition: color ease-in-out 250ms;
  }
}
</style>
