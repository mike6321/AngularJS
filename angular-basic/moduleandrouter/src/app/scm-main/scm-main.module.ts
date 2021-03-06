import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";
import { MainDashboardComponent } from '../main/main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, PageNotFoundComponent],
  /**
   * 모듈이 분리되어있기 떄문에 exports가 필수적이다!
   * */
  exports: [NavbarComponent, SidebarComponent, FooterComponent, PageNotFoundComponent]
})
export class ScmMainModule { }
