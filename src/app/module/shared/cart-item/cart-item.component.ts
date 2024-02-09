import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/state/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product: any;
  @Input() showButton: any;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    console.log("cart item product", this.product)
  }

  updateCartItem = (quantity: number) => {
    debugger
    this.cartService.updateCartItem({
      cartItemId: this.product._id,
      data: { quantity: quantity + this.product.quantity },
    });
  };

  removeCartItem() {
    this.cartService.removeCartItem(this.product._id);
  }
}
