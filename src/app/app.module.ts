import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InputComponent } from 'app/shared/input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderTotalComponent } from './order/order-total/order-total.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { MenuItemComponent } from './restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.component';
import { MenuComponent } from './restaurants/restaurant/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    OrderTotalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
