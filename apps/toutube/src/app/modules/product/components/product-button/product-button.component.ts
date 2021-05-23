import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';



@Component({
  selector: '.product-button',
  templateUrl: './product-button.component.html',
  styleUrls: ['./product-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductButtonComponent {
  @Input() content: any
  @Input() active: number = 1;
}
