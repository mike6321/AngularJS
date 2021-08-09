import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  //부모에서 자식
  @Input() inputData : string;

  min: number = 0;
  second: number = 0;
  ms: number = 0;

  timeinterval;

  constructor() {

  }

  timeStart() {
    this.timeinterval = setInterval(() => {
      this.ms++;
    }, 10)
  }
  timeStop() {
    clearInterval(this.timeinterval);

  }
  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  ngOnInit() {

  }

  // ngOnChanges(changes : SimpleChanges) {
  //   console.log(changes);
  //   for (let propName in changes) {
  //     if (propName == 'inputData') {
  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }


}
