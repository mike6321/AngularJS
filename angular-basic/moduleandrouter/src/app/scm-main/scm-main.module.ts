import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, MainDashboardComponent, PageNotFoundComponent],
  /**
   * 모듈이 분리되어있기 떄문에 exports가 필수적이다!
   * */
  exports: [NavbarComponent, SidebarComponent, FooterComponent, MainDashboardComponent, PageNotFoundComponent]
})
export class ScmMainModule { }
