import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Product, ProductBody } from "./types/types";



@Injectable()
export class ProductService {
  products: ProductBody[] = null

  constructor(
    private readonly _http: HttpClient,
    // private readonly _router: Router
  ) { }

  public fetch(n: number, m: number): Observable<ProductBody[]> {
    this._http.get<ProductBody[]>('http://localhost:4200/api').subscribe(data => this.products = [...data])
    return this._http.get<ProductBody[]>('http://localhost:4200/api')
  }

  public fetchOne(id) {
    this._http.get(`http://localhost:4200/game` + `${id}`).subscribe(data => console.log(data))
    return this._http.get<Product>(`http://localhost:4200/game` + `${id}`)
    // const one = this.products.find(item => item.id = id)
    // console.log(one)
  }
}
