import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from "../../product.service";
import { Product } from "../../types/types";
import { Observable } from "rxjs";



@Component({
  selector: '.product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product: any


  constructor(private readonly _productService: ProductService) { }

  ngOnInit(): void {
  }
}
