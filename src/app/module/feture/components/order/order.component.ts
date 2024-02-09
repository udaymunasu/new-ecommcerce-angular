import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders: any;
  orderFilter = [
    { value: 'on_the_way', label: 'On The Way' },
    { value: 'deliverd', label: 'Deliverd' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'returned', label: 'Returned' },
  ];

  constructor(
    // private orderService: OrderService,
    // private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    // this.orderService.getOrderHistory()
    // this.store.pipe(select((store:AppState)=>store.order)).subscribe(order=>{
    //   this.orders=order.orders
    //   console.log("state ------------ ",this.orders)
    // })
  }

  navigateToOrderDetail = (path: string) => {
    this.router.navigate([path]);
  };
}
