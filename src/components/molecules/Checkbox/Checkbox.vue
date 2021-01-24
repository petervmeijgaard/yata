<template>
  <VCheckbox :class="$style.checkbox">
    <VCheckboxControl
      :class="$style['checkbox-control']"
      :checked="checked"
    />
    <VCheckboxCheckmark :class="$style['checkbox-checkmark'] "/>
  </VCheckbox>
</template>

<script>
import VCheckbox from '../../atoms/Checkbox/Checkbox.vue';
import VCheckboxCheckmark from '../../atoms/Checkbox/CheckboxCheckmark.vue';
import VCheckboxControl from '../../atoms/Checkbox/CheckboxControl.vue';

export default {
  name: 'Checkbox',

  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  components: {
    VCheckbox,
    VCheckboxCheckmark,
    VCheckboxControl,
  },
};
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
