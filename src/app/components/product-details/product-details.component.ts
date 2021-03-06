import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { product } from 'src/app/products';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: Product;
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.params['id']);
    console.log(id);
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
      console.log('product', this.product);
    });
  }
  addToCart(product: product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
