import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numParent = 0;
  obj = {
    num: 0;
  };
  plus() {
    this.obj.num++;
    //this.numParent++;
  }
}
