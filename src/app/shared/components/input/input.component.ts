import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input("label") label: string;
  @Input("placeholder") placeholder: string;
  @Input("textarea") textarea: boolean;
  constructor() {}

  ngOnInit() {}
}
