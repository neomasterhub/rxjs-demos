import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-intro8',
  templateUrl: './intro8.component.html',
  styleUrls: ['./intro8.component.css']
})
export class Intro8Component implements OnInit {

  obsArr: Array<Observable<number>> = [

    // On ngOnDestroy()
    new Observable<number>(observer => {

      for (let i = 1; i <= 3; i++) {
        observer.next(i);
      }

      return () => console.log('obs1 teardown');
    }),

    // After complete()
    new Observable<number>(observer => {

      for (let i = 1; i <= 3; i++) {
        observer.next(i);
      }
      observer.complete();

      return () => console.log('obs2 teardown');
    }),

    // After error()
    new Observable<number>(observer => {

      for (let i = 1; i <= 3; i++) {
        observer.next(i);
      }
      observer.error('obs3 error');

      return () => console.log('obs3 teardown');
    })
  ];

  constructor(public title: Title) {
  }

  ngOnInit(): void {
  }

}
