import { Component } from '@angular/core';
import {LogService} from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private info: LogService) {
    info.info("app");
  }
}
