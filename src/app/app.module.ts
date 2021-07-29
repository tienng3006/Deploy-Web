import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';

import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { LinePolocyComponent } from './components/line-polocy/line-polocy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
<<<<<<< HEAD
import { ProductComponent } from './model/product/product.component';
import { BannersComponent } from './components/banners/banners.component';

=======
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
>>>>>>> 26e1328643ffd2262e1707cbcfb0227e4c67b2e2

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBoxComponent,
    NavLinkComponent,
    DropDownComponent,
    LinePolocyComponent,
    CarouselComponent,
<<<<<<< HEAD
    ProductComponent,
    BannersComponent,
=======
    ProductListComponent,
    ProductItemComponent,
>>>>>>> 26e1328643ffd2262e1707cbcfb0227e4c67b2e2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
