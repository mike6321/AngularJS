import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() obj;

  constructor() {
    console.log('constructor', this.obj);
  }

  ngOnInit() {
    console.log('ngOnInit', this.obj);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.obj);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.obj);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
