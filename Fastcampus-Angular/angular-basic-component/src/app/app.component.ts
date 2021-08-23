import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  click = () => {
    this.title = '자식으로 부터 실행됌';
  }
  myEventParent() {
    this.title = '자식이 발생한 이벤트에 의해 실행됨';
  }
}
