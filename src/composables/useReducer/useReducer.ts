import { ref, readonly } from 'vue';
import { Dispatch, Reducer, ReducerAction, ReducerState, ReturnValue } from './types';

export function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I & ReducerState<R>,
  initializer?: (arg: I & ReducerState<R>) => ReducerState<R>,
): ReturnValue<R> {
  const state = ref(initializer ? initializer(initializerArg) : initializerArg);

  const dispatch: Dispatch<ReducerAction<R>> = action => {
    state.value = reducer(state.value, action);
  };

  return [readonly(state), dispatch];
}
