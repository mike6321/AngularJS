import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductManagementComponent} from "./product/product-management/product-management.component";
import {CategoryManagementComponent} from "./category/category-management/category-management.component";
import {MainDashboardComponent} from "./scm-main/main-dashboard/main-dashboard.component";
import {PageNotFoundComponent} from "./scm-main/page-not-found/page-not-found.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'product-list', component: ProductManagementComponent },
  { path: 'category-list', component: CategoryManagementComponent },
  { path: 'total-summary', component: MainDashboardComponent },
  { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
