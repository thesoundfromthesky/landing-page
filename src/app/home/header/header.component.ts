import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  host: { class: "block px pt pb bg-img bgc" }
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
