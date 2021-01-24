import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {

  gestionForm: any = [];
  submitted = false;
  newProduct: any = {};
  edit: any;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) { }


  ngOnInit(): void {

    this.edit = this.productsService.getItem();
    console.log(this.edit)

    this.gestionForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.maxLength(35)]],
      image: ['', [Validators.required]],
      stars: ['']
    });

    this.gestionForm.valueChanges.subscribe((changes) => {
      //Asi añadimos al objeto vacio de newProduct los valores del formulario
      this.newProduct = changes;
      console.log(this.newProduct);
    })

  }

  //Funcion para añadir ptos NUEVOS al json
  addToProducts() {
    const newProduct = { ...this.gestionForm.value };
    this.productsService.postProduct(newProduct).subscribe();
  }

  //funcion para mostrar un alert cuando se añade/edita un pto
  buttonMessage(event) {
    alert('Producto añadido');
  }

}




