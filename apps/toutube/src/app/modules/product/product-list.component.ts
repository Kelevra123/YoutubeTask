import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from "./product.service";
import { Product, ProductBody } from "./types/types";
import { Observable } from "rxjs";



@Component({
  selector: '.product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  public $products: Observable<ProductBody[]> = null;
  public $info: Observable<Product> = null;

  constructor(public _productService: ProductService) {

  }

  ngOnInit(): void {
    this.$products = this._productService.fetch(0, 10)
    this.$info = this._productService.fetchOne(1)
  }

  choseCard(id) {
    this.$info = this._productService.fetchOne(id)
    console.log('done', id)
    window.scrollTo(0, 0)
  }
}
