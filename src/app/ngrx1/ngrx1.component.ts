import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './ngrx1.actions';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.css']
})
export class Ngrx1Component implements OnInit {
  
  count$?: Observable<number>;
  
  constructor(public title: Title,
    private store: Store<{count: number}>) { 
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
  
  ngOnInit(): void {
  }

}
