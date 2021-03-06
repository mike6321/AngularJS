import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  checkList: string[];
  checkedResult: boolean[] = [];
  checkedResultData: string[];

  constructor() {
    this.checkList = [
      'check list one',
      'check list two',
      'check list three',
      'check list four'
    ];
    this.checkList.forEach(() => this.checkedResult.push(false));
  }

  extractCheckedResult() {
    // console.log(this.checkedResult);
    this.checkedResultData = [];
    this.checkedResult.forEach((isChecked, idx) => {
      if (isChecked) {
        this.checkedResultData.push(this.checkList[idx]);
      }
    });
  }

  ngOnInit() {
  }

  removeCheckedItem(removeItem) {
    this.checkedResult.forEach((isChecked, _id) => {
      if (isChecked && this.checkList[_id] === removeItem) {
        this.checkedResult[_id] = false;
        this.extractCheckedResult();
      }
    });
  }
}
