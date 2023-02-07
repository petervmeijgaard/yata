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
          <PlusIcon />
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
            <PenIcon />
          </VAction>
          <VAction v-else @click="todoItems.update(todo)">
            <FloppyDiskIcon />
          </VAction>
          <VAction @click="todoItems.remove(todo)" is-danger>
            <TrashIcon />
          </VAction>
        </VActionContainer>
      </VTodo>
    </VTodoContainer>
  </VApp>
</template>

<script lang="ts" setup>
import PlusIcon from 'virtual:icons/fa6-solid/plus';
import PenIcon from 'virtual:icons/fa6-solid/pen';
import TrashIcon from 'virtual:icons/fa6-solid/trash';
import FloppyDiskIcon from 'virtual:icons/fa6-solid/floppy-disk';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useTodoItems } from './composables';
import VAction from './components/atoms/VAction/VAction.vue';
import VActionContainer from './components/atoms/VAction/VActionContainer.vue';
import VApp from './components/atoms/VApp/VApp.vue';
import VForm from './components/atoms/VForm/VForm.vue';
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
const newTodoRef = ref();

const onSubmit = () => {
  if (newTodo.value === '') {
    return;
  }

  todoItems.add(newTodo.value);

  newTodo.value = '';
};

const onInput = (event: Event) => {
  newTodo.value = (event.target as HTMLInputElement).value;
};

const onKeydown = (event: KeyboardEvent) => {
  if (!newTodoRef.value) {
    return;
  }

  if (event.key === 'n' && event.ctrlKey) {
    (newTodoRef.value.$el as HTMLInputElement).focus();
  }

  if (event.key === 'Escape') {
    (newTodoRef.value.$el as HTMLInputElement).blur();
  }
};

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
});
</script>
