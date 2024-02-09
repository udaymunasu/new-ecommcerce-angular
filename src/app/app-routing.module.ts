import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/feture/components/home/home.component';
import { ProductsComponent } from './module/feture/components/products/products.component';
import { CartComponent } from './module/feture/components/cart/cart.component';
import { ProductDetailsComponent } from './module/feture/components/product-details/product-details.component';
import { CheckoutComponent } from './module/feture/components/checkout/checkout.component';
import { PaymentComponent } from './module/feture/components/payment/payment.component';
import { PaymentSuccessComponent } from './module/feture/components/payment-success/payment-success.component';
import { OrderComponent } from './module/feture/components/order/order.component';
import { OrderDetailsComponent } from './module/feture/components/order-details/order-details.component';
import { SigninComponent } from './module/auth/signin/signin.component';
import { SignupComponent } from './module/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/payment/:id', component: PaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: 'order-summery', component: ProductsComponent },
  { path: '', component: OrderComponent },
  { path: 'order/:orderId', component: OrderDetailsComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./module/admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
