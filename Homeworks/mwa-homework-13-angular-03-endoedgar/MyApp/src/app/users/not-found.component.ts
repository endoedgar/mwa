import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p>
      The requested resource was not found!
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
