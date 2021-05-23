import { ChangeDetectionStrategy, Component, Input,  ViewEncapsulation } from '@angular/core';




@Component({
  selector: '.product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product: any
}
