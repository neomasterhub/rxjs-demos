import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.component.html',
  styleUrls: ['./intro2.component.css']
})
export class Intro2Component implements OnInit {

  obs: Observable<string> = new Observable(observer => {
    let i = 0;
    setInterval(() => observer.next(`msg ${i++}`), 1000);
  });
  subs: Subscription = new Subscription();
  subsCount = 0;

  addSubscription() {
    let nofSub = ++this.subsCount;
    this.subs?.add(this.obs?.subscribe(msg => console.log(`sub ${nofSub}: ${msg}`)));
    console.log(`Subscription ${nofSub} added`);
  }

  unsubscribeAll() {
    this.subs?.unsubscribe();
    console.log(`All ${this.subsCount} subscriptions discontinued`);
    this.subsCount = 0;
  }

  ngOnInit(): void {
  }

}
