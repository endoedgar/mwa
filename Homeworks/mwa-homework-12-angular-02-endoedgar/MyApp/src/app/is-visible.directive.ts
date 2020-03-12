import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {
  @Input()
  public isVisible : Boolean;

  constructor(private host : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.host.nativeElement, "display", this.isVisible ? "inherit" : "none");
  }
}
