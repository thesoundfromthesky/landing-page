import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  host: { class: "card flex-column mt bg-c w min-h p border-radius box-shadow" }
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
