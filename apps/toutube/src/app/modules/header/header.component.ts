import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';



@Component({
  selector: '.header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }
