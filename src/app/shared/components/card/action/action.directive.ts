import { Directive, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: "[cardAction]"
})
export class ActionDirective {
  // @HostBinding("class") classList = "ft border-radius bgc";
  constructor(private r2: Renderer2, private el: ElementRef) {
    this.r2.addClass(this.el.nativeElement, "ft");
    this.r2.addClass(this.el.nativeElement, "border-radius");
    this.r2.addClass(this.el.nativeElement, "bgc");
    this.r2.addClass(this.el.nativeElement, "px");
    this.r2.addClass(this.el.nativeElement, "py");
  }
}
