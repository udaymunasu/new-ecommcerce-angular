import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-tracker',
  templateUrl: './order-tracker.component.html',
  styleUrls: ['./order-tracker.component.scss']
})
export class OrderTrackerComponent implements OnInit {

  constructor() { }
  @Input() activeStep: any
  @Input() steps:any

  ngOnInit(): void {
  }

}
