import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-intro5',
  templateUrl: './intro5.component.html',
  styleUrls: ['./intro5.component.css']
})
export class Intro5Component implements OnInit {
  
  subsArr: Subscription[] = [];
  subsGroup = new Subscription(); 
  subsCount = 0;
  alive = true;

  constructor(public title: Title) { }

  ngOnInit(): void {

    for (let i = 0; i < 3; i++) {

      const obs = new Observable<string>(observer => {

        let msgIdx = 1;
        const nofSub = this.subsCount++;
        const int = setInterval(() => {

          if (msgIdx < 4) {
            observer.next(`sub ${nofSub}: msg ${msgIdx++}`);
          }
          // if the component will be destroyed after msgIdx = 3
          // the predicate condition will never occur
          
          if (nofSub === 1) {
            console.log({                             // after alive = false
              subsGroupClosed: this.subsGroup.closed, // false
              subsArrClosed: this.subsArr[0].closed   // true
            });

            if (this.subsArr[0].closed) {
              clearInterval(int);
            }
          }

        }, 1000);
      })
        .pipe(takeWhile(() => this.alive))
        .subscribe(msg => console.log(msg));

      this.subsGroup.add(obs);
      this.subsArr.push(obs);
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
    console.log({ alive: this.alive });
  }
}
