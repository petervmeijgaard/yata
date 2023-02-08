import { DeepReadonly, Ref, UnwrapRef } from 'vue';

export type Dispatch<A> = (value: A) => void;

export type Reducer<S, A> = (prevState: S, action: A) => S;

export type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;

export type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A>
  ? A
  : never;

export type ReturnValue<R extends Reducer<any, any>> = [
  DeepReadonly<Ref<UnwrapRef<ReducerState<R>>>>,
  Dispatch<ReducerAction<R>>,
];
