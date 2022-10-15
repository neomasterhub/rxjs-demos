import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Store} from "@ngrx/store";
import {IBook} from "./store/model";
import {map, Observable} from "rxjs";
import {add, clear, remove} from "./store/actions";

@Component({
  selector: 'app-ngrx3',
  templateUrl: './ngrx3.component.html',
  styleUrls: ['./ngrx3.component.css']
})
export class Ngrx3Component implements OnInit {

  removedBookId = '';
  book = {
    title: 'book 1',
    authors: ['a1', 'a2']
  }
  books$?: Observable<string>;

  constructor(public title: Title, private store: Store<{ books: ReadonlyArray<IBook> }>) {
    this.books$ = store.select(s => s.books)
      .pipe(map(books => JSON.stringify(books, null, 2)));
  }

  setBookTitle(e: Event) {
    this.book.title = (<HTMLInputElement>e.target).value;
  }

  setBookAuthors(e: Event) {
    this.book.authors = (<HTMLInputElement>e.target).value
      .split(',')
      .map(a => a.trim());
  }

  setRemovedBookId(e: Event) {
    this.removedBookId = (<HTMLInputElement>e.target).value;
  }

  addBook() {
    this.store.dispatch(add({
      title: this.book.title,
      authors: this.book.authors
    }));
  }

  removeBook() {
    this.store.dispatch(remove({
      id: this.removedBookId
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(clear());
  }

}
