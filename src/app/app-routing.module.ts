import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Intro1Component } from './intro1/intro1.component';
import { Intro2Component } from './intro2/intro2.component';
import { Intro3Component } from './intro3/intro3.component';
import { Intro4Component } from './intro4/intro4.component';
import { Intro5Component } from './intro5/intro5.component';
import { Intro6Component } from './intro6/intro6.component';

const rxjsRoutes: Routes = [
  { path: 'intro-1', component: Intro1Component, title: '1. Подписка и отписка' },
  { path: 'intro-2', component: Intro2Component, title: '2. Группа подписок' },
  { path: 'intro-3', component: Intro3Component, title: '3. Перемещение в группу'},
  { path: 'intro-4', component: Intro4Component, title: '4. Автоматическая отписка: в ngOnDestroy()'},
  { path: 'intro-5', component: Intro5Component, title: '5. Автоматическая отписка: takeWhile()'},
  { path: 'intro-6', component: Intro6Component, title: '6. Автоматическая отписка: takeUntil()'}
];

@NgModule({
  imports: [RouterModule.forRoot(rxjsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static get rxjsRouteLinks() {
    return rxjsRoutes.map(r => {
      return {
        path: r.path,
        title: r.title
      }
    });
  }
}
