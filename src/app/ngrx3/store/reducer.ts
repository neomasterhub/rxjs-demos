import {createReducer, on} from '@ngrx/store';
import {IBook} from "./model";
import {add, clear, remove} from "./actions";

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,

  on(add, (state, {title, authors}) => {

    const book: IBook = {
      id: new Date().getTime().toString(),
      volumeInfo: {
        title,
        authors
      }
    }

    const newState = [...state, book];
    return newState;
  }),

  on(remove, (state, {id}) => {
    const newState = state.filter(book => book.id !== id);
    return newState;
  }),

  on(clear, (state) => [])
)
