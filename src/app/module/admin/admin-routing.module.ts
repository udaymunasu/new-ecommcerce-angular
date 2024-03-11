import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderTableComponent } from './components/order-tabel/order-tabel.component';
import { CartComponent } from '../feture/components/cart/cart.component';
import { CheckoutComponent } from '../feture/components/checkout/checkout.component';
import { HomeComponent } from '../feture/components/home/home.component';
import { OrderDetailsComponent } from '../feture/components/order-details/order-details.component';
import { OrderComponent } from '../feture/components/order/order.component';
import { PaymentSuccessComponent } from '../feture/components/payment-success/payment-success.component';
import { PaymentComponent } from '../feture/components/payment/payment.component';
import { ProductDetailsComponent } from '../feture/components/product-details/product-details.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';


const adminRoutes:Routes=[
  {path: '',component:AdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"orders",component:OrderTableComponent},
    {path:"products",component:ProductsComponent},
    {path:"customers",component:CustomersComponent},
    {path:"add-products",component:AddProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
