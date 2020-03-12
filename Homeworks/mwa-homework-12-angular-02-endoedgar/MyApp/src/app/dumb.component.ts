import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dumb',
  template: `
    <li>
      <ng-content></ng-content>
    </li>
  `,
  styles: [`
    li {
      color: red;
      font-weight: bold;
    }
  `]
})
export class DumbComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
