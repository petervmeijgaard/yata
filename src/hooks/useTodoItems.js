import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const useTodoItems = () => {
  const items = ref([]);

  const add = todo => {
    items.value.unshift({
      id: uuidv4(),
      content: todo,
      checked: false,
      editMode: false,
    });
  };

  const check = todo => {
    items.value = items.value.map(item =>
      item.id === todo.id ? { ...item, checked: !item.checked } : item,
    );
  };

  const remove = todo => {
    items.value = items.value.filter(item => item.id !== todo.id);
  };

  const edit = (event, todo) => {
    items.value = items.value.map(item =>
      todo.id === item.id ? { ...item, content: event.target.value } : item,
    );
  };

  const update = todo => {
    if (todo.content === '') {
      remove(todo);

      return;
    }

    items.value = items.value.map(item =>
      item.id === todo.id ? { ...item, editMode: false } : item,
    );
  };

  const editMode = todo => {
    if (todo.editMode) {
      return;
    }

    items.value = items.value.map(item =>
      item.id === todo.id ? { ...item, editMode: true } : item,
    );
  };

  return {
    items,
    add,
    check,
    remove,
    edit,
    update,
    editMode,
  };
};

export default useTodoItems;
