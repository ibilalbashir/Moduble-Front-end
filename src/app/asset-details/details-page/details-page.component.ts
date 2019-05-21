import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  items: any = [];
  cardColor = 'black';
  componentColor = 'red'
  cardIcon = "#E6E6E6"
  componentIcon = "red"
  constructor() { }

  ngOnInit() {
  }
  onTagEdited(event) {
    console.log(event)
  }

  cardSelected() {
    this.cardColor = 'red';
    this.componentColor = 'black';
    this.cardIcon = 'red';
    this.componentIcon = "#E6E6E6"
  }
  componentSelected() {
    this.cardColor = 'black';
    this.componentColor = 'red';
    this.cardIcon = '#E6E6E6';
    this.componentIcon = "red"
  }
}
