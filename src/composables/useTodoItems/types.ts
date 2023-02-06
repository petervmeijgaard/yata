export type Todo = {
  id: string;
  content: string;
  checked: boolean;
  editMode: boolean;
};

export type State = Todo[];

export type AddAction = {
  type: 'add';
  payload: string;
};

export type UpdateAction = {
  type: 'update';
  payload: Todo;
};

export type CheckAction = {
  type: 'check';
  payload: Todo;
};

export type RemoveAction = {
  type: 'remove';
  payload: Todo;
};

export type EditAction = {
  type: 'edit';
  payload: {
    event: Event;
    todo: Todo;
  };
};

export type EditModeAction = {
  type: 'editMode';
  payload: Todo;
};

export type Action =
  | AddAction
  | UpdateAction
  | CheckAction
  | RemoveAction
  | EditAction
  | EditModeAction;
