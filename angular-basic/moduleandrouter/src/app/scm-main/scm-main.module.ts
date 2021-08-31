import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  /**
   * 모듈이 분리되어있기 떄문에 exports가 필수적이다!
   * */
  exports: [NavbarComponent, SidebarComponent, FooterComponent]
})
export class ScmMainModule { }
