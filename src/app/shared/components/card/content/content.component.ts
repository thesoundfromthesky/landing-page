import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  host: { class: "ft content mt mb w" }
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
