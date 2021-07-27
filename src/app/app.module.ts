import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';

import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { LinePolocyComponent } from './components/line-polocy/line-polocy.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
    BrowserAnimationsModule,
    CarouselModule,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
