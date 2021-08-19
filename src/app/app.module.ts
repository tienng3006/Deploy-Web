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
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BannersComponent } from './components/banners/banners.component';
import { SwitchProductComponent } from './switch-product/switch-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { NavLinkItemComponent } from './components/nav-link-item/nav-link-item.component';
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
    ProductListComponent,
    ProductItemComponent,
    BannersComponent,
    SwitchProductComponent,
    FooterComponent,
    ProductDetailsComponent,
    PopUpComponent,
    FilterProductComponent,
    NavLinkItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
