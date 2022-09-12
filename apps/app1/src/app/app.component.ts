import { Component } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app1';

  myMethod(): void {
    return true;
  }

  mymethod2(): number {
    console.log('test');
  }
}
