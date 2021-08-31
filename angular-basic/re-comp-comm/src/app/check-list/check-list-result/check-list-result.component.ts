import {Component, Input, OnInit} from '@angular/core';
import {DoCheck, OnChanges} from "@angular/core/src/metadata/lifecycle_hooks";

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
  checkedResult: string[];
  checkedCnt: number;

  constructor() {
    this.initResult();
  }

  ngOnInit() {

  }

  private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }

}
