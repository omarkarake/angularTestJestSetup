import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrl: './matchers.component.css',
})
export class MatchersComponent {
  compilerAndroidCode() {
    throw new Error('you are using old angular');
  }
}
