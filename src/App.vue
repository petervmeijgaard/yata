<template>
  <VApp>
    <VTitle title="Yet Another Todo App"> 📝 YATA</VTitle>
    <VForm @submit.prevent="onSubmit">
      <VInputGroup>
        <VTextInput
          type="text"
          ref="newTodoRef"
          :value="newTodo"
          @input="onInput"
          placeholder="Get stuff done today!"
        />
        <VInputAddon type="submit" :disabled="newTodo === ''">
          <VIcon icon="plus" is-fixed-width />
        </VInputAddon>
      </VInputGroup>
    </VForm>
    <VDivider />
    <VTodoContainer>
      <VTodo v-for="todo in todoItems.items" :key="todo.id">
        <VCheckbox :checked="todo.checked" @change="todoItems.check(todo)" />
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
          <VAction v-if="!todo.editMode" @click="todoItems.editMode(todo)">
            <VIcon icon="pen" is-fixed-width />
          </VAction>
          <VAction v-else @click="todoItems.update(todo)">
            <VIcon icon="save" is-fixed-width />
          </VAction>
          <VAction @click="todoItems.remove(todo)" is-danger>
            <VIcon icon="trash" is-fixed-width />
          </VAction>
        </VActionContainer>
      </VTodo>
    </VTodoContainer>
  </VApp>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useTodoItems } from './hooks';
import VAction from './components/atoms/VAction/VAction.vue';
import VActionContainer from './components/atoms/VAction/VActionContainer.vue';
import VApp from './components/atoms/VApp/VApp.vue';
import VForm from './components/atoms/VForm/VForm.vue';
import VIcon from './components/atoms/VIcon/VIcon.vue';
import VDivider from './components/atoms/VDivider/VDivider.vue';
import VInputAddon from './components/atoms/VInput/VInputAddon.vue';
import VInputGroup from './components/atoms/VInput/VInputGroup.vue';
import VTextInput from './components/atoms/VTextInput/VTextInput.vue';
import VTodo from './components/atoms/VTodo/VTodo.vue';
import VTodoContainer from './components/atoms/VTodo/VTodoContainer.vue';
import VTodoContent from './components/atoms/VTodo/VTodoContent.vue';
import VCheckbox from './components/molecules/VCheckbox/VCheckbox.vue';
import VTitle from './components/typography/VTitle/VTitle.vue';

const todoItems = reactive(useTodoItems());
const newTodo = ref('');
const newTodoRef = ref(null);

const onSubmit = () => {
  if (newTodo.value === '') {
    return;
  }

  todoItems.add(newTodo.value);

  newTodo.value = '';
};

const onInput = event => {
  newTodo.value = event.target.value;
};

const onKeydown = event => {
  if (event.key === 'n' && event.ctrlKey) {
    newTodoRef.value.$el.focus();
  }

  if (event.key === 'Escape') {
    newTodoRef.value.$el.blur();
  }
};

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
});
</script>
