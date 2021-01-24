import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  itemData: any;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/products')
  }

  editItem(productGestion) {
    this.itemData = productGestion;
  }

  getItem() {
    let tempVar = this.itemData;
    return tempVar
  }

  //funcion para introducir ptos nuevos al json
  postProduct(newProduct: any) {
    return this.http.post('http://localhost:3000/products', newProduct)
  }

}
