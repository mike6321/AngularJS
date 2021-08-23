import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {Route, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

// const routes: Route[] = [
//   {path: '', component: HomeComponent},
//   {path:"login", component: LoginComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
