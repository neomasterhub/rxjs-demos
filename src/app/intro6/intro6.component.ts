import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-intro6',
  templateUrl: './intro6.component.html',
  styleUrls: ['./intro6.component.css']
})
export class Intro6Component implements OnInit {

  // A Subject is like an Observable, but can multicast to many Observers. 
  // Subjects are like EventEmitters: they maintain a registry of many listeners.
  unsubscribe = new Subject<void>();

  subsArr: Subscription[] = [];
  subsGroup = new Subscription();
  subsCount = 0;

  unsubscribeAndGetInfo(): void {
    if (this.subsArr[0].closed) {
      return;
    }

    this.unsubscribe.next();
    this.unsubscribe.complete();

    console.log({
      subsGroupClosed: this.subsGroup.closed, // false
      subsArrClosed: this.subsArr[0].closed // true
    });

  }

  constructor(public title: Title) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      const obs = new Observable<string>(observer => {
        let msgIdx = 1;
        const nofSub = this.subsCount++;
        setInterval(() => observer.next(`sub ${nofSub}: msg ${msgIdx++}`), 1000);
      })
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(msg => console.log(msg));

      this.subsGroup.add(obs);
      this.subsArr.push(obs);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAndGetInfo();
  }

  unsubscribeClick(): void {
    this.unsubscribeAndGetInfo();
  }
}
