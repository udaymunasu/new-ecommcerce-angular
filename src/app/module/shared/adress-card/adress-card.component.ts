import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress-card',
  templateUrl: './adress-card.component.html',
  styleUrls: ['./adress-card.component.scss']
})
export class AdressCardComponent implements OnInit {

  constructor() { }
  @Input() address:any

  ngOnInit(): void {
    console.log("address card", this.address)
  }

}
