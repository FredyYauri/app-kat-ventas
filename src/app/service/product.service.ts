import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  public GetProducts() {
    return this.httpClient.get<any>("/product");
  }

  public GetProductById(idProduct: String) {
    return this.httpClient.get<any>("/product/" + idProduct)
  }

  private headerRequest = new HttpHeaders({ 'Content-Type': 'application/json' });
  public SaveProduct(product: Product) {
    return this.httpClient.post<any>("/product", product, { headers: this.headerRequest });
  }

  public UpdateProduct(product: Product) {
    return this.httpClient.put<any>("/product", product, { headers: this.headerRequest });
  }
}
