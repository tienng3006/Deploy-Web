import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: product;

  constructor() {}

  ngOnInit(): void {}
}
