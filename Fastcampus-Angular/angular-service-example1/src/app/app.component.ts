import { Component } from '@angular/core';
import {LogService} from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private log;
  constructor(private log: LogService) {
    // this.log = log;
    this.log.info("Hello");
    this.log.info("Hello2");
  }
}
