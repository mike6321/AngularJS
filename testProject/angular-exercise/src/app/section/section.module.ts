import {NgModule} from '@angular/core';
import {SectionComponent} from "./section.component";
import {CommonModule} from "@angular/common";
import {StopwatchModule} from "./stopwatch/stopwatch.module";
import {RouterModule, Routes} from "@angular/router";
import {StopwatchComponent} from "./stopwatch/stopwatch.component";
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SectionComponent,
    ClockComponent
  ],
  exports:[
    SectionComponent,
    RouterModule
  ]
})
export class SectionModule { }
