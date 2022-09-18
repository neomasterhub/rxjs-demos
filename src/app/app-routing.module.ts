import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Intro1Component } from './intro1/intro1.component';
import { Intro2Component } from './intro2/intro2.component';

const routes: Routes = [
  { path: 'intro-1', component: Intro1Component, title: '1. Подписка и отписка' },
  { path: 'intro-2', component: Intro2Component, title: '2. Группа подписок' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static get routeLinks() {
    return routes.map(r => {
      return {
        path: r.path,
        title: r.title
      }
    });
  }
}
