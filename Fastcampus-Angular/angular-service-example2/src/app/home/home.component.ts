import { Component, OnInit } from '@angular/core';
import {LogService} from "../log.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LogService]
})
export class HomeComponent implements OnInit {

  constructor(private log: LogService) { }

  ngOnInit() {
    this.log.info('home');
  }

}
