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
        v-for="todo in todos"
        :key="todo.id"
      >
        <VCheckbox
          :checked="todo.checked"
          @change="onCheck(todo)"
        />
        <VTodoContent
          :is-checked="todo.checked"
          :value="todo.content"
          :edit-mode="todo.editMode"
          @dblclick="onDoubleClick(todo)"
          @input="onEdit($event, todo)"
          @blur="onUpdate(todo)"
          @keydown.enter="onUpdate(todo)"
        >
          {{ todo.content }}
        </VTodoContent>
        <VActionContainer>
          <VAction
            v-if="!todo.editMode"
            @click="onDoubleClick(todo)"
          >
            <VIcon
              icon="pen"
              is-fixed-width
            />
          </VAction>
          <VAction
            v-else
            @click="onUpdate(todo)"
          >
            <VIcon
              icon="save"
              is-fixed-width
            />
          </VAction>
          <VAction
            @click="onRemove(todo)"
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
import { onMounted, onUnmounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
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
    const newTodo = ref('');
    const newTodoRef = ref(null);
    const todos = ref([]);
    const $keyListeners = ref(null);

    const onSubmit = () => {
      if (newTodo.value === '') {
        return;
      }

      todos.value.unshift({
        id: uuidv4(),
        content: newTodo.value,
        checked: false,
        editMode: false,
      });

      newTodo.value = '';
    };

    const onInput = (event) => {
      newTodo.value = event.target.value;
    };

    const onCheck = (todo) => {
      todos.value = todos.value.map((item) => (
        item.id === todo.id ? { ...item, checked: !item.checked } : item
      ));
    };

    const onRemove = (todo) => {
      todos.value = todos.value.filter((item) => item.id !== todo.id);
    };

    const onEdit = (event, todo) => {
      todos.value = todos.value.map((item) => (
        todo.id === item.id ? { ...item, content: event.target.value } : item
      ));
    };

    const onUpdate = (todo) => {
      if (todo.content === '') {
        onRemove(todo);

        return;
      }

      todos.value = todos.value.map((item) => (
        item.id === todo.id ? { ...item, editMode: false } : item
      ));
    };

    const onDoubleClick = (todo) => {
      if (todo.editMode) {
        return;
      }

      todos.value = todos.value.map((item) => (
        item.id === todo.id ? { ...item, editMode: true } : item
      ));
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
      newTodo,
      newTodoRef,
      todos,
      onSubmit,
      onInput,
      onCheck,
      onRemove,
      onEdit,
      onUpdate,
      onDoubleClick,
    };
  },
};
</script>
