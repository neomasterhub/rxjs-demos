import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Observable} from "rxjs";

@Component({
  selector: 'app-intro7',
  templateUrl: './intro7.component.html',
  styleUrls: ['./intro7.component.css']
})
export class Intro7Component implements OnInit {

  obsArr: Array<Observable<string>> = [];

  constructor(public title: Title) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      const obs = new Observable<string>(observer => {

        let msgIdx = 1;
        const interval = setInterval(() => {
          const msg = `sub ${i}: msg ${msgIdx++}`;
          observer.next(msg);
          console.log(msg);
        }, 1000);

        // teardown
        // will be called on unsubscribe
        return () => {
          clearInterval(interval);
          console.log(`sub ${i} unsubscribed`)
        };
      });

      this.obsArr.push(obs);
    }
  }
}
