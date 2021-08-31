import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ProductModule} from "./product/product.module";
import {CategoryModule} from "./category/category.module";
import {ScmMainModule} from "./scm-main/scm-main.module";
import { AppRoutingModule } from './/app-routing.module';


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
    ScmMainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
