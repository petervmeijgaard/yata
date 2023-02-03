import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

type Todo = {
  id: string;
  content: string;
  checked: boolean;
  editMode: boolean;
};

const useTodoItems = () => {
  const items = ref<Todo[]>([]);

  const add = (todo: string) => {
    items.value.unshift({
      id: uuidv4(),
      content: todo,
      checked: false,
      editMode: false,
    });
  };

  const check = (todo: Todo) => {
    items.value = items.value.map(item =>
      item.id === todo.id ? { ...item, checked: !item.checked } : item,
    );
  };

  const remove = (todo: Todo) => {
    items.value = items.value.filter(item => item.id !== todo.id);
  };

  const edit = (event: Event, todo: Todo) => {
    items.value = items.value.map(item =>
      todo.id === item.id ? { ...item, content: (event.target as HTMLInputElement).value } : item,
    );
  };

  const update = (todo: Todo) => {
    if (todo.content === '') {
      remove(todo);

      return;
    }

    items.value = items.value.map(item =>
      item.id === todo.id ? { ...item, editMode: false } : item,
    );
  };

  const editMode = (todo: Todo) => {
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
