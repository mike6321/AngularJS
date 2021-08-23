import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Sample1Component} from "./component/sample1.component";
import {Sample2Component} from "./component/sample2/sample2.component";
import { Sample3Component } from './component/sample3/sample3.component';
import { Sample4Component } from './component/sample4/sample4.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    Sample4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
