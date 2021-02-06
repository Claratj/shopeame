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
    image: 'https://www.fml.com.mx/wp-content/uploads/2016/04/Race-Registration-Image-Not-Found.png',
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

  //funcion para sobreescribir productos del json
  putProduct(editedProduct, idProd) {
    return this.http.put('http://localhost:3000/products/' + idProd, editedProduct);
  }

  deleteProduct(idProd) {
    return this.http.delete('http://localhost:3000/products/' + idProd);
  }

}
