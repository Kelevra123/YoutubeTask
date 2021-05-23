import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductRowComponent } from "./components/product-row/product-row.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./product.service";
import { ProductButtonComponent } from './components/product-button/product-button.component';
import { ProductViewComponent } from './components/product-view/product-view.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductRowComponent,
    ProductButtonComponent,
    ProductViewComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        BrowserModule,
        FormsModule,
    ],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductModule { }
