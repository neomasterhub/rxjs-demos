import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.component.html',
  styleUrls: ['./intro1.component.css']
})
export class Intro1Component implements OnInit {

  obs?: Observable<string>;
  sub?: Subscription;

  constructor(public title: Title) {
    this.obs = new Observable(function observe(observer) {
      let i = 1;
      setInterval(() => observer.next(`msg ${i++}`), 500);
    });
  }

  ngOnInit(): void {
  }

  subscribe(): void {
    if (!this.sub) {
      this.sub = this.obs?.subscribe(msg => console.log(msg));
      
      console.log('subscribed');
      console.log(`closed: ${this.sub?.closed}`);
    }
  }

  unsubscribe(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      
      console.log('unsubscribed');
      console.log(`closed: ${this.sub?.closed}`);
      
      this.sub = undefined;
      
      console.log('undefined');
    }
  }
}
