import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ProductModule} from "./product/product.module";
import {CategoryModule} from "./category/category.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*Angular Module*/
    BrowserModule,
    FormsModule,
    HttpModule,
    /*App Module*/
    ProductModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
