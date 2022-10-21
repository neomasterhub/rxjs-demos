import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Store} from "@ngrx/store";
import {IBook} from "../ngrx3/store/model";
import {Actions, ofType} from "@ngrx/effects";
import {map} from "rxjs";
import {add} from "../ngrx3/store/actions";

@Component({
  selector: 'app-ngrx5',
  templateUrl: './ngrx5.component.html',
  styleUrls: ['./ngrx5.component.css']
})
export class Ngrx5Component {

  bookAddAuditEventActions$ = this.actions.pipe(
    ofType('[Book Audit Event] Add'),
    map(({type, payload}) => console.log({type, payload}))
  );

  constructor(
    public title: Title,
    private store: Store<{ books: ReadonlyArray<IBook> }>,
    private actions: Actions) {
  }

  click() {
    this.store.dispatch(add({title: 'The Blue Sky', authors: ['John Doe']}));
  }
}
