import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {upper} from "./ngrx2.actions";

@Component({
  selector: 'app-ngrx2',
  templateUrl: './ngrx2.component.html',
  styleUrls: ['./ngrx2.component.css']
})
export class Ngrx2Component implements OnInit {

  upperText$?: Observable<string>;
  text = 'Hello World!';

  constructor(public title: Title, private store: Store<{ upper: string }>) {
    this.upperText$ = store.select(s => s.upper);
  }

  calc(e: Event) {
    this.store.dispatch(upper({
      text: (<HTMLInputElement>e.target).value
    }));
  }

  ngOnInit(): void {
    this.store.dispatch(upper({
      text: this.text
    }));
  }

}
