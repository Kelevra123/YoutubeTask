import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Product, ProductBody } from "../../types/types";
import { ProductService } from "../../product.service";



@Component({
  selector: '.product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductRowComponent implements OnInit, OnChanges {
  @ViewChild('button') button
  @Input() product: ProductBody[] = []
  @Input()info: Product = null
  @Output()onAdd: EventEmitter<number> = new EventEmitter<number>()
  page: ProductBody[] = []
  pageCount: any = []
  active: number = 1;
  chose: boolean = false;

  constructor(private readonly _productService: ProductService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.confirmPagination(0)
  }

  confirmPagination(n = 0, m = 20) {
    if (this.product) {
      this.page = []
      let count: number = 0
      count = Math.floor(this.product.length / 20)
      for (let k = n * 20; k < m; k++) {
        this.page.push(this.product[k])
      }
      if (n < count && n >= 2) {
        this.pageCount = []
        this.pageCount.push(n-1, n, n+1, n+2, '...', count)
      }
      if (n < count && n <= 1) {
        this.pageCount = []
        this.pageCount.push(1, 2, 3, '...', count)
      }
      if (n === count - 1 || n === count - 2) {
        this.pageCount = []
        this.pageCount.push(1, '...', count - 2, count - 1, count)
      }
    }
  }

  onNext(n, m) {
    if (typeof n === "string"){
      return
    }
    let x = n * 20
    let y = m * 20
    window.scrollTo(0, 0)
    this.confirmPagination(n - 1, y)
    this.active = n
  }

  getInfo(id, e) {
    this.onAdd.emit(id)
    this.chose = !this.chose
  }

}
