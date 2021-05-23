import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.product-button',
  templateUrl: './product-button.component.html',
  styleUrls: ['./product-button.component.scss']
})
export class ProductButtonComponent implements OnInit {
  @Input() content: any
  @Input() active: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
