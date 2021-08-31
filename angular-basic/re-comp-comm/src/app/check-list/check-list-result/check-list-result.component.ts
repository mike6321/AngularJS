import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {

  /**
   * 부모에 대한 값을 받아 올때
   * <cc-check-list-result [checkedResult]="checkedResultData"></cc-check-list-result>
   * */
  @Input()
  _checkedData: string[];
  checkedCnt: number;

  constructor() {

  }

  ngOnInit() {

  }

  @Input()
  set checkedResult(checkedResult: string[]) {
    if (checkedResult) {
      this._checkedData = checkedResult;
      this.checkedCnt = this._checkedData.length;
    }
  }

}
