import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-intro3',
  templateUrl: './intro3.component.html',
  styleUrls: ['./intro3.component.css']
})
export class Intro3Component implements OnInit {

  constructor(public title: Title) {
    this.moveToSubs1();
  }

  ngOnInit(): void {
  }

  msgIndex = 0;
  nofSub = 0;
  obs = new Observable(observer => {
    setInterval(() => observer.next(), 1000);
  });
  subs1 = new Subscription();
  subs2 = new Subscription();
  observer = {  
    next: () => console.log(`${this.nofSub}: msg ${this.msgIndex++}`)
  };
  sub = this.obs.subscribe(this.observer);

  moveToSubs1() {
    console.log('moving to subs1');
    this.subs2.remove(this.sub);
    this.subs1.add(this.sub);
    this.nofSub = 1;
  }

  moveToSubs2() {
    console.log('moving to subs2');
    this.subs1.remove(this.sub);
    this.subs2.add(this.sub);
    this.nofSub = 2;
  }

  unsubscribeSubs1() {
    console.log('%c unsubscribe subs1', 'color: red');
    this.subs1.unsubscribe();
  }

  unsubscribeSubs2() {
    console.log('%c unsubscribe subs2', 'color: red');
    this.subs2.unsubscribe();
  }

  outputSubs() {
    console.log({ 
      subs1: this.subs1,
      subs2: this.subs2,
      sub: this.sub
    });
    
  }

}
