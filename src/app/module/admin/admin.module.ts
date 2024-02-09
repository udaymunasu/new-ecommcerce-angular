import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrderTableComponent } from './components/order-tabel/order-tabel.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AddProductComponent,
    CustomersComponent,
    OrderTableComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
