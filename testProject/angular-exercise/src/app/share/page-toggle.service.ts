import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {StopwatchModule} from '../section/stopwatch/stopwatch.module';

@Injectable(
  {
    providedIn: StopwatchModule
  }
)
export class PageToggleService {

  public routingCounting = 0;

  constructor(private router: Router) { }

  goPage(target) {
    this.routingCounting++;
    this.router.navigateByUrl(target);
  }
}
