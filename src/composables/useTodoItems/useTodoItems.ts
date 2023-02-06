import { useReducer } from '../useReducer';
import { initialState, reducer } from './reducer';
import { Todo } from './types';

export const useTodoItems = () => {
  const [items, dispatch] = useReducer(reducer, initialState);

  const add = (content: string) => dispatch({ type: 'add', payload: content });

  const check = (todo: Todo) => dispatch({ type: 'check', payload: todo });

  const remove = (todo: Todo) => dispatch({ type: 'remove', payload: todo });

  const edit = (event: Event, todo: Todo) => dispatch({ type: 'edit', payload: { event, todo } });

  const update = (todo: Todo) => {
    if (todo.content === '') {
      return remove(todo);
    }

    return dispatch({ type: 'update', payload: todo });
  };

  const editMode = (todo: Todo) => {
    if (todo.editMode) {
      return;
    }

    return dispatch({ type: 'editMode', payload: todo });
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
