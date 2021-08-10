import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome!';
  commandText;
  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  startTime($event) {
    this.present = $event;
  }

  goClock() {
    this.router.navigateByUrl('/clock');
  }
}
