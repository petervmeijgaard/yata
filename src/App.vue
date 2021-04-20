<template>
  <VApp>
    <VTitle title="Yet Another Todo App">
      📝 YATA
    </VTitle>
    <VForm @submit.prevent="onSubmit">
      <VInputGroup>
        <VTextInput
          type="text"
          ref="newTodoRef"
          :value="newTodo"
          @input="onInput"
          placeholder="Get stuff done today!"
        />
        <VInputAddon
          type="submit"
          :disabled="newTodo === ''"
        >
          <VIcon
            icon="plus"
            is-fixed-width
          />
        </VInputAddon>
      </VInputGroup>
    </VForm>
    <VDivider />
    <VTodoContainer>
      <VTodo
        v-for="todo in todoItems.items"
        :key="todo.id"
      >
        <VCheckbox
          :checked="todo.checked"
          @change="todoItems.check(todo)"
        />
        <VTodoContent
          :is-checked="todo.checked"
          :value="todo.content"
          :edit-mode="todo.editMode"
          @dblclick="todoItems.editMode(todo)"
          @input="todoItems.edit($event, todo)"
          @blur="todoItems.update(todo)"
          @keydown.enter="todoItems.update(todo)"
        >
          {{ todo.content }}
        </VTodoContent>
        <VActionContainer>
          <VAction
            v-if="!todo.editMode"
            @click="todoItems.editMode(todo)"
          >
            <VIcon
              icon="pen"
              is-fixed-width
            />
          </VAction>
          <VAction
            v-else
            @click="todoItems.update(todo)"
          >
            <VIcon
              icon="save"
              is-fixed-width
            />
          </VAction>
          <VAction
            @click="todoItems.remove(todo)"
            is-danger
          >
            <VIcon
              icon="trash"
              is-fixed-width
            />
          </VAction>
        </VActionContainer>
      </VTodo>
    </VTodoContainer>
  </VApp>
</template>

<script>
import {
  onMounted, onUnmounted, ref, reactive,
} from 'vue';
import { useTodoItems } from '@/hooks';
import VAction from './components/atoms/Action/Action.vue';
import VActionContainer from './components/atoms/Action/ActionContainer.vue';
import VApp from './components/atoms/App/App.vue';
import VForm from './components/atoms/Form/Form.vue';
import VIcon from './components/atoms/Icon/Icon.vue';
import VDivider from './components/atoms/Divider/Divider.vue';
import VInputAddon from './components/atoms/Input/InputAddon.vue';
import VInputGroup from './components/atoms/Input/InputGroup.vue';
import VTextInput from './components/atoms/TextInput/TextInput.vue';
import VTodo from './components/atoms/Todo/Todo.vue';
import VTodoContainer from './components/atoms/Todo/TodoContainer.vue';
import VTodoContent from './components/atoms/Todo/TodoContent.vue';
import VCheckbox from './components/molecules/Checkbox/Checkbox.vue';
import VTitle from './components/typography/Title/Title.vue';

export default {
  name: 'App',

  components: {
    VAction,
    VActionContainer,
    VApp,
    VDivider,
    VForm,
    VIcon,
    VInputAddon,
    VInputGroup,
    VTextInput,
    VTodo,
    VTodoContainer,
    VTodoContent,
    VCheckbox,
    VTitle,
  },

  setup() {
    const todoItems = reactive(useTodoItems());
    const newTodo = ref('');
    const newTodoRef = ref(null);
    const todos = ref([]);
    const $keyListeners = ref(null);

    const onSubmit = () => {
      if (newTodo.value === '') {
        return;
      }

      todoItems.add(newTodo.value);

      newTodo.value = '';
    };

    const onInput = (event) => {
      newTodo.value = event.target.value;
    };

    onMounted(() => {
      $keyListeners.value = (event) => {
        if (event.key === 'n' && (event.altKey)) {
          newTodoRef.value.$el.focus();
        }

        if (event.key === 'Escape') {
          newTodoRef.value.$el.blur();
        }
      };

      document.addEventListener('keydown', $keyListeners.value);
    });

    onUnmounted(() => {
      document.removeEventListener('keydown', $keyListeners.value);
    });

    return {
      todoItems,

      newTodo,
      newTodoRef,
      todos,
      onSubmit,
      onInput,
    };
  },
};
</script>
