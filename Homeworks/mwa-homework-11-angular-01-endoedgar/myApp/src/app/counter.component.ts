import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "counter",
  template: `
    <p>
      <button (click)="btnClick(-1)">-</button>
      {{ counterValue }}
      <button (click)="btnClick(1)">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input()
  public initialValue: number;
  @Output()
  public counterChange = new EventEmitter();

  public counterValue: number;

  btnClick(incValue: number) {
    this.counterValue += incValue;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit(): void {
    this.counterValue =
      typeof this.initialValue === "number" ? this.initialValue : 0;
  }
}
