import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'category/:name', component: FilterProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
