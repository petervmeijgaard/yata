<template>
  <VCheckbox :class="$style.checkbox">
    <VCheckboxControl :class="$style['checkbox-control']" :checked="checked" />
    <VCheckboxCheckmark :class="$style['checkbox-checkmark']" />
  </VCheckbox>
</template>

<script setup lang="ts">
import VCheckbox from '../../atoms/VCheckbox/VCheckbox.vue';
import VCheckboxCheckmark from '../../atoms/VCheckbox/VCheckboxCheckmark.vue';
import VCheckboxControl from '../../atoms/VCheckbox/VCheckboxControl.vue';

type Props = {
  checked?: boolean;
};

withDefaults(defineProps<Props>(), {
  checked: false,
});
</script>

<style lang="scss" module>
.checkbox:hover .checkbox-checkmark {
  background-color: #e6f5ff;
  border-color: #e6f5ff;

  &::after {
    color: #e6f5ff;
  }
}

.checkbox-control:checked ~ .checkbox-checkmark {
  background-color: #0af;
  border-color: #0af;

  &::after {
    color: #fff;
  }
}
</style>
