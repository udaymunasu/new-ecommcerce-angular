import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './components/feture.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductCardSliderComponent } from './components/home/product-card-slider/product-card-slider.component';
import { SliderProductCardComponent } from './components/home/slider-product-card/slider-product-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import { AdressFormComponent } from './components/checkout/adress-form/adress-form.component';

import { MatInputModule } from '@angular/material/input';
import { OrderCardComponent } from './components/order/order-card/order-card.component';


@NgModule({
  declarations: [
    FetureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductCardSliderComponent,
    SliderProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent,
    AdressFormComponent,
    OrderCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    FetureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductCardSliderComponent,
    SliderProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent,

  ]
})
export class FetureModule { }
