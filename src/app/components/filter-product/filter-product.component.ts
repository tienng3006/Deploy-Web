import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, product } from 'src/app/products';
@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss'],
})
export class FilterProductComponent implements OnInit {
  listProduct: product[] = Products;
  productFilter: product[] = [];
  @Input() category!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const category = routeParams.get('name');
    this.productFilter = this.listProduct.filter(
      (product) => product.category === category
    );
    console.log(this.productFilter);
  }
}
