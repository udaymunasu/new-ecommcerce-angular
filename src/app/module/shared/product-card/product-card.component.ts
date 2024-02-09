import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() product:any ;

  products = [1, 1, 1, 1, 1];

}
