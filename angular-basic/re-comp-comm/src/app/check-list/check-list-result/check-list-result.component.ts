import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  /**
   * 자식이 부모에게 값을 전달
   * */
  @Output()
  onSelectedToRemoveItem = new EventEmitter<string>();

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

  removeMe(idx: number) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx]);
  }
}
