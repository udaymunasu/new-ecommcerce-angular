import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavContentComponent } from './navbar/nav-content/nav-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './product-card/product-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AdressCardComponent } from './adress-card/adress-card.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderTrackerComponent } from './order-tracker/order-tracker.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    AdressCardComponent,
    CartItemComponent,
    OrderTrackerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    AdressCardComponent,
    CartItemComponent,
    OrderTrackerComponent
  ],
})
export class SharedModule { }
