import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Intro1Component } from './intro1/intro1.component';
import { Intro2Component } from './intro2/intro2.component';
import { Intro3Component } from './intro3/intro3.component';
import { Intro4Component } from './intro4/intro4.component';
import { Intro5Component } from './intro5/intro5.component';
import { Intro6Component } from './intro6/intro6.component';
import { Ngrx1Component } from './ngrx1/ngrx1.component';
import {Intro7Component} from "./intro7/intro7.component";
import {Intro8Component} from "./intro8/intro8.component";

const rxjsIntroRoutes: Routes = [
  { path: 'intro-1', component: Intro1Component, title: '1. Подписка и отписка' },
  { path: 'intro-2', component: Intro2Component, title: '2. Группа подписок' },
  { path: 'intro-3', component: Intro3Component, title: '3. Перемещение в группу'},
  { path: 'intro-4', component: Intro4Component, title: '4. Автоматическая отписка: в ngOnDestroy()'},
  { path: 'intro-5', component: Intro5Component, title: '5. Автоматическая отписка: takeWhile()'},
  { path: 'intro-6', component: Intro6Component, title: '6. Автоматическая отписка: takeUntil()'},
  { path: 'intro-7', component: Intro7Component, title: '7. Автоматическая отписка: AsyncPipe'},
  { path: 'intro-8', component: Intro8Component, title: '8. Observable teardown logic'}
];

const ngrxRoutes: Routes = [
  { path: 'ngrx-1', component: Ngrx1Component, title: '1. Счетчик' }
];

@NgModule({
  imports: [RouterModule.forRoot(rxjsIntroRoutes.concat(ngrxRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static get rxjsIntroRouteLinks() {
    return rxjsIntroRoutes.map(r => {
      return {
        path: r.path,
        title: r.title
      }
    });
  }
  static get ngrxRouteLinks() {
    return ngrxRoutes.map(r => {
      return {
        path: r.path,
        title: r.title
      }
    });
  }
}
