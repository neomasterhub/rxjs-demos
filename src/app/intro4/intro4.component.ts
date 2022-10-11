import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-intro4',
  templateUrl: './intro4.component.html',
  styleUrls: ['./intro4.component.css']
})
export class Intro4Component implements OnInit {

  unsubscribeOnDestroy = false;
  subs = new Subscription();
  subsCount = 0;

  genSubscription(): void {

    const obs = new Observable<string>(observer => {
      let i = 1;
      const nofSub = this.subsCount++;
      setInterval(() => observer.next(`sub ${nofSub}: msg ${i++}`), 1000);
    });

    this.subs.add(obs.subscribe(msg => console.log(msg)));
  }

  constructor(public title: Title) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.genSubscription();
    }
  }

  ngOnDestroy(): void {
    if (this.unsubscribeOnDestroy)
      this.subs.unsubscribe();
  }
}
