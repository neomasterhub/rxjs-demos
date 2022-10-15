import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Intro1Component} from './intro1/intro1.component';
import {Intro2Component} from './intro2/intro2.component';
import {Intro3Component} from './intro3/intro3.component';
import {Intro4Component} from './intro4/intro4.component';
import {Intro5Component} from './intro5/intro5.component';
import {Intro6Component} from './intro6/intro6.component';
import {Intro7Component} from './intro7/intro7.component';
import {StoreModule} from '@ngrx/store';
import {Ngrx1Component} from './ngrx1/ngrx1.component';
import {counterReducer} from './ngrx1/ngrx1.reducer';
import {Intro8Component} from './intro8/intro8.component';
import {Ngrx2Component} from './ngrx2/ngrx2.component';
import {upperReducer} from "./ngrx2/ngrx2.reducer";
import {Ngrx3Component} from "./ngrx3/ngrx3.component";
import {booksReducer} from "./ngrx3/store/reducer";
import { Ngrx4Component } from './ngrx4/ngrx4.component';

@NgModule({
  declarations: [
    AppComponent,
    Intro1Component,
    Intro2Component,
    Intro3Component,
    Intro4Component,
    Intro5Component,
    Intro6Component,
    Ngrx1Component,
    Intro7Component,
    Intro8Component,
    Ngrx2Component,
    Ngrx3Component,
    Ngrx4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      upper: upperReducer,
      books: booksReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
