import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-section-info",
  templateUrl: "./section-info.component.html",
  styleUrls: ["./section-info.component.scss"],
  host: { class: "bgc border-radius box-shadow px pt pb" }
})
export class SectionInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
