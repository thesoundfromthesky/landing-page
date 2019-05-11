import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-section-about",
  templateUrl: "./section-about.component.html",
  styleUrls: ["./section-about.component.scss"],
  host: { class: "block px py bg-img" }
})
export class SectionAboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
