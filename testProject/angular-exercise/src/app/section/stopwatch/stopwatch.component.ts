import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome!';
  commandText
  constructor() { }

  ngOnInit() {
  }

  startTime($event) {
    this.present = $event;
  }

}
