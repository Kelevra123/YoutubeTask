import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product, ProductBody } from "./types/types";



@Injectable()
export class ProductService {

  constructor(
    private readonly _http: HttpClient,
  ) { }

  public fetch(n: number, m: number): Observable<ProductBody[]> {
    return this._http.get<ProductBody[]>('http://localhost:4200/api')
  }

  public fetchOne(id) {
    return this._http.get<Product>(`http://localhost:4200/game` + `${id}`)
  }
}
