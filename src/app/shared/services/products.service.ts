import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  itemData: any;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  editItem(productGestion){
    this.itemData = productGestion; 
  }

  getItem(){
    let tempVar = this.itemData;
    return tempVar
  }


}
