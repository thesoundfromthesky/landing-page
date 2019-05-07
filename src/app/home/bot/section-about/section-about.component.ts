import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-section-about",
  templateUrl: "./section-about.component.html",
  styleUrls: ["./section-about.component.scss"],
  host: { class: "min-h-block bg-img px flex-center" }
})
export class SectionAboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
