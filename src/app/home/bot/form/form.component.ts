import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  host: { class: "block px pb" }
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
