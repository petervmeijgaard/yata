<template>
  <component :is="as" :class="$style['title']">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Props = {
  as?: string;
};

withDefaults(defineProps<Props>(), {
  as: 'h1',
});
</script>

<style lang="scss" module>
.title {
  font-size: 2rem;
  color: #0af;
  padding: 2rem 0;
  font-weight: bold;
}
</style>
