import {createAction, props} from '@ngrx/store';

export const upper = createAction(
  '[Text Edit] Upper',
  props<{ text: string }>()
);
