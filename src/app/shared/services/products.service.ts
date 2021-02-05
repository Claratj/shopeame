import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private http: HttpClient) { }

  itemData = {
    id: '',
    name: 'Nombre',
    price: 'Precio',
    description: 'Descripción',
    stars: 1,
    image: 'https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=',
  };


  //petición a la API
  getProducts() {
    return this.http.get('http://localhost:3000/products')
  }

  //envío a gestion para editar
  editItem(item) {
    this.itemData = item;
  }

  //funcion para introducir ptos nuevos al json
  postProduct(newProduct: any) {
    return this.http.post('http://localhost:3000/products', newProduct)
  }

  putProduct(editedProduct: any, idProd: string) {
    return this.http.put('http://localhost:3000/products/' + idProd, editedProduct);
  }

}
