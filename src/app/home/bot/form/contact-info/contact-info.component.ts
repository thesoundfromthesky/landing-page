import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
  host: { class: "block bg-c px py" }
})
export class ContactInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
