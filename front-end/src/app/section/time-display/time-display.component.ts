import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string | undefined;

  test = 1;

  constructor() {
    console.log(this.inputData);

    // setInterval(() => {
    //   this.test++;
    // }, 1000)
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
  }

  ngOnInit(): void {
  }

}
