import { Component } from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrl: './asynchronous.component.css',
})
export class AsynchronousComponent {
  timeoutResponse: string = 'test';
  constructor(){}
  checkSetTimout(){
    setTimeout(() => {
      console.log('inside setTimeout');
      this.timeoutResponse = 'setTimeoutCheck';
    }, 1000);
  }
}
