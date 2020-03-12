import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {
  @Input("ngStyle")
  style;

  constructor(private host : ElementRef, private renderer : Renderer2) { 
  }

  @HostListener("dblclick")
  public onHostDoubleClick() {
    this.style['font-size'] = `${parseInt(this.style['font-size'])+2}px` ;
  }
}
