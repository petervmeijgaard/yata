import { v4 as uuid } from 'uuid';
import { Action, State } from './types';

export const initialState: State = [];

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add':
      return [
        {
          id: uuid(),
          content: action.payload,
          checked: false,
          editMode: false,
        },
        ...state,
      ];
    case 'check':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, checked: !item.checked } : item,
      );
    case 'update':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, editMode: false } : item,
      );
    case 'remove':
      return state.filter(item => item.id !== action.payload.id);
    case 'edit':
      return state.map(item =>
        action.payload.todo.id === item.id
          ? { ...item, content: (action.payload.event.target as HTMLInputElement).value }
          : item,
      );
    case 'editMode':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, editMode: true } : item,
      );
    default:
      return state;
  }
};
