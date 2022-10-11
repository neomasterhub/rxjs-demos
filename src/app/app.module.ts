import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Intro1Component } from './intro1/intro1.component';
import { Intro2Component } from './intro2/intro2.component';
import { Intro3Component } from './intro3/intro3.component';
import { Intro4Component } from './intro4/intro4.component';
import { Intro5Component } from './intro5/intro5.component';

@NgModule({
  declarations: [
    AppComponent,
    Intro1Component,
    Intro2Component,
    Intro3Component,
    Intro4Component,
    Intro5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
