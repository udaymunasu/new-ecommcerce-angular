import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderTableComponent } from './components/order-tabel/order-tabel.component';

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
