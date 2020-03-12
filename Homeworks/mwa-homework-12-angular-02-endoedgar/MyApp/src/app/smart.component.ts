import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart',
  template: `
    <ul>
      <dumb [ngStyle]="{'font-size': '12px' }" makeBigger *ngFor="let elem of array">
        {{ elem | multi:3 }}
      </dumb>
    <ul>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  @Input()
  public array : any[];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
