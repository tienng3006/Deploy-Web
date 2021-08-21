import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { product, Products } from 'src/app/products';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  product!: product;
  products: product[] = Products;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // this.getListProduct(
  }
  // getListProduct() {
  //   this.productService.getListProducts().subscribe((res: any) => {
  //     this.products = res;
  //     console.log(res);
  //   });
  // }

  Options: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin: 10,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
  };
}
