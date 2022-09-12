import { Component } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app1';
  variable: any;

  myMethod(): boolean {
    return true;
  }

  mymethod2(): number {
    return 'hola';
    console.log('test');
  }
}
