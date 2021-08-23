import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible = true;
  list: {title: string}[] = [
    {title: 'Tour of Heroes'},
    {title: 'CLI Documentation'},
    {title: 'Angular blog'}
  ];

  style= {
    color: 'green'
  };
  color= "aqua";
}
