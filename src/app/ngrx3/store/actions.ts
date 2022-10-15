import {createAction, props} from '@ngrx/store';

export const add = createAction(
  '[Books] Add',
  props<{
    title: string,
    authors: string[]
  }>()
);

export const remove = createAction(
  '[Books] Remove',
  props<{
    id: string
  }>()
);

export const clear = createAction('[Books] Clear');
