import { Component, OnInit } from "@angular/core";

@Component({
  selector: "card-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
  host: { class: "ft mt mb" }
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
