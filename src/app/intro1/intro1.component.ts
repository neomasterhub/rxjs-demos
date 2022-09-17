import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.component.html',
  styleUrls: ['./intro1.component.css']
})
export class Intro1Component implements OnInit {

  obs?: Observable<string>;
  sub?: Subscription;

  constructor() {
    this.obs = new Observable(function observe(observer) {
      let i = 1;
      setInterval(() => observer.next(`msg ${i++}`), 500);
    });
  }

  ngOnInit(): void {
  }

  subscribe(): void {
    if (!this.sub) {
      console.log("subscribed");
      this.sub = this.obs?.subscribe(msg => console.log(msg));
    }
  }

  unsubscribe(): void {
    if (this.sub) {
      console.log("unsubscribed");
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }
}
