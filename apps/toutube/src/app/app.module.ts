import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductModule } from "./modules/product/product.module";
import { HeaderModule } from "./modules/header/header.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
