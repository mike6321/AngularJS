import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path: "home", redirectTo: ''},
  {path: "book/:id", component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }