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

  clearProduct() {
    this.itemData = {
      id: '',
      name: 'Nombre',
      price: 'Precio',
      description: 'Descripción',
      stars: 1,
      image: 'https://www.fml.com.mx/wp-content/uploads/2016/04/Race-Registration-Image-Not-Found.png',
    };

  }


  //petición a la API
  getProducts() {
    return this.http.get('https://angular-shopeame-backend.herokuapp.com/products')
  }

  //envío a gestion para editar
  editItem(item) {
    this.itemData = item;
  }

  //funcion para introducir ptos nuevos al json
  postProduct(newProduct: any) {
    return this.http.post('https://angular-shopeame-backend.herokuapp.com/products', newProduct)
  }

  //funcion para sobreescribir productos del json
  putProduct(editedProduct, idProd) {
    return this.http.put('https://angular-shopeame-backend.herokuapp.com/products/' + idProd, editedProduct);
  }

  deleteProduct(idProd) {
    return this.http.delete('https://angular-shopeame-backend.herokuapp.com/products/' + idProd);
  }

}
