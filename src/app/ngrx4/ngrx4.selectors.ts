import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IBook} from "../ngrx3/store/model";

export const booksFeatureSelector = createFeatureSelector<ReadonlyArray<IBook>>('books');

export const bookViewsSelector = createSelector(
  booksFeatureSelector,
  (books) => books
    .map(b => {
      return {
        title: b.volumeInfo.title,
        authors: b.volumeInfo.authors.join(', ')
      }
    })
);

export const booksViewSelector = createSelector(
  bookViewsSelector,
  (views) =>
    views.map(v => `"${v.title}" by ${v.authors}`).join('\n')
);
