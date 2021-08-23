import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {GithubService} from "./github.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'githubUrl',
    useValue: 'https://api.github.com/users'
  },
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
