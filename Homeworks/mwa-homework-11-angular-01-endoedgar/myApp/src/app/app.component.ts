import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <p>{{ childCounterValue }}</p>
    <counter
      [initialValue]="childCounterValue"
      (counterChange)="counterChange($event)"
    ></counter>
    <counter
      [initialValue]="childCounterValue"
      (counterChange)="counterChange($event)"
    ></counter>
    <counter
      [initialValue]="childCounterValue"
      (counterChange)="counterChange($event)"
    ></counter>
    <counter
      [initialValue]="childCounterValue"
      (counterChange)="counterChange($event)"
    ></counter>
  `
})
export class AppComponent {
  public childCounterValue = 3;

  public counterChange(value) {
    this.childCounterValue = value;
  }
}
