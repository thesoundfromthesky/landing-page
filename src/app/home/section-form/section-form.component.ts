import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-section-form",
  templateUrl: "./section-form.component.html",
  styleUrls: ["./section-form.component.scss"],
  host: { class: "bgc border-radius box-shadow px pt pb" }
})
export class SectionFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
