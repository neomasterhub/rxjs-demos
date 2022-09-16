import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Intro1Component} from './intro1/intro1.component';

const routes: Routes = [
  {path: 'intro-1', component: Intro1Component, title: '1. Подписка и отписка'}
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
