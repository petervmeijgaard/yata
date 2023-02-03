<template>
  <input type="checkbox" :class="$style['checkbox-control']" :checked="checked" />
</template>

<script setup lang="ts">
type Props = {
  checked?: boolean;
};

withDefaults(defineProps<Props>(), {
  checked: false,
});
</script>

<style lang="scss" module>
.checkbox-control {
  display: none;
}
</style>
