import {NgModule} from '@angular/core';
import {SectionComponent} from "./section.component";
import {TimeDisplayComponent} from "./stopwatch/time-display/time-display.component";
import {ButtonsComponent} from "./stopwatch/buttons/buttons.component";
import {CommonModule} from "@angular/common";
import {StopwatchModule} from "./stopwatch/stopwatch.module";

@NgModule({
  imports: [
    CommonModule,
    StopwatchModule
  ],
  declarations: [
    SectionComponent
  ],
  exports:[
    SectionComponent
  ]
})
export class SectionModule { }
