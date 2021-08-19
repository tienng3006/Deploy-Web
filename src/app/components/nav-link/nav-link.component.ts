import { Component, OnInit } from '@angular/core';
import { product, Products } from 'src/app/products';
@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent implements OnInit {
  listProduct: product[] = Products;
  categories: string[] = Products.map((val) => val.category);
  listCategory: string[] = this.categories.filter((val, i) => {
    return this.categories.indexOf(val) === i;
  });
  constructor() {}

  ngOnInit(): void {}
}
