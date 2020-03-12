import { Component, OnInit } from '@angular/core';
import { RandomUserAPIService } from '../random-user-api.service';

@Component({
  selector: 'users',
  template: `
    <p *ngFor="let user of users$ | async; let i=index">
      <a [routerLink]="[i]">{{ user.name.first }}</a>
    </p>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  users$;

  constructor(private randomUserApiService : RandomUserAPIService) { }

  ngOnInit(): void {
    this.users$ = this.randomUserApiService.getCachedData();
  }

}
