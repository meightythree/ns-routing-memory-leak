import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { interval, tap } from 'rxjs'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private readonly router: RouterExtensions) {}

  ngOnInit(): void {
    // this.backNavigationDemo();
    // this.simpleNavigationDemo();
    // this.clearHistoryDemo();
  }

  clearHistoryDemo(): void {
    interval(250).pipe(tap(i => {
      const step = i % 2;
      if (step === 0) {
        this.router.navigate(['youtube'], {clearHistory: true})
      }
      if (step === 1) {
        this.router.navigate(['facebook'], {clearHistory: true})
      }
    })).subscribe();
  }

  simpleNavigationDemo(): void {
    interval(250).pipe(tap(i => {
      const step = i % 2;
      if (step === 0) {
        this.router.navigate(['youtube'])
      }
      if (step === 1) {
        this.router.navigate(['facebook'])
      }
    })).subscribe();
  }
  
  backNavigationDemo(): void {
    interval(250).pipe(tap(i => {
      const step = i % 4;
      if (step === 0) {
        this.router.navigate(['youtube'])
      }
      if (step === 2) {
        this.router.navigate(['facebook'])
      }
      if (step === 1 || step === 3) {
        this.router.back();
      }
    })).subscribe()
  }
}
