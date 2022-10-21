import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class BooksEffects {

  public effect$ = createEffect(() => this.actions$.pipe(
    ofType('[Books] Add'),
    map((actionData) => ({
      type: '[Book Audit Event] Add',
      payload: {
        eventDate: new Date().toISOString(),
        actionData
      }
    }))
  ));

  constructor(private actions$: Actions) {
  }
}
