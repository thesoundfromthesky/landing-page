import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  host: { class: "flex-column max-w  min-h bgc box-shadow border-radius" }
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
