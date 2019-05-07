import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-top-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  host: { class: "min-h-block bg-pos-size px" }
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
