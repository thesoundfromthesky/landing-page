import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[card-button]"
})
export class ButtonDirective {
  @HostBinding("class") class = "ft action mt mb w min-h border-radius ";
  constructor() {}
}
