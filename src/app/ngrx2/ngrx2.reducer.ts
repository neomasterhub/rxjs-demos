import {createReducer, on} from '@ngrx/store';
import {upper} from './ngrx2.actions';

export const initialState = '';

export const upperReducer = createReducer(
  initialState,
  on(upper, (state, {text}) => text.toUpperCase())
);
