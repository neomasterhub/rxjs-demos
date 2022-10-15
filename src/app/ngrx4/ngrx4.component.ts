import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {Store} from "@ngrx/store";
import {booksFeatureSelector, booksViewSelector} from "./ngrx4.selectors";
import {add, clear, remove} from "../ngrx3/store/actions";

@Component({
  selector: 'app-ngrx4',
  templateUrl: './ngrx4.component.html',
  styleUrls: ['./ngrx4.component.css']
})
export class Ngrx4Component implements OnInit {

  booksView1$?: Observable<string>;
  booksView2$?: Observable<string>;

  constructor(public title: Title, private store: Store) {

    // from ngrx3 demo
    this.booksView1$ = store.select(booksFeatureSelector)
      .pipe(map(books => JSON.stringify(books, null, 2)));

    this.booksView2$ = store.select(booksViewSelector);

    this.store.dispatch(add({
      title: "The red sun",
      authors: ["John Doe", "Mickael Smith"]
    }));

    this.store.dispatch(add({
      title: "The blue sky",
      authors: ["Anna Doe", "Jeffrey Nelson"]
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(clear());
  }

}
