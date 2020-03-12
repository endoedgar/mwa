import { Component, OnInit } from '@angular/core';
import { RandomUserAPIService } from './random-user-api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Main Component</h1>
    <nav><a [routerLink]="['users']">Users Modules</a></nav>
    <hr/>
    <router-outlet></router-outlet>
  `,
  styles: [ `
    h1 {
      color: blue;
    }
  ` ]
})
export class AppComponent implements OnInit {
  constructor(private randomUserApiService : RandomUserAPIService) { }

  ngOnInit() {
    this.randomUserApiService.getOnlineData();
  }
}
