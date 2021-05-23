import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { Product } from "../../types/types";



@Component({
  selector: '.product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent {
  @Input() info: Product = null;
}
