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

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) { }

  itemToEdit: any;
  productGestion: any;

  ngOnInit(): void {

    this.itemToEdit = this.productsService.editItem(this.productGestion);

    this.gestionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      precio: ['', [Validators.required, Validators.minLength(1)]],
      descripcion: ['', [Validators.required, Validators.maxLength(35)]],
      rutaImagen: ['', [Validators.required]],
      valoracion: ['']
    });

    /*Estas funciones nos mostrarian por consola los cambios
    en los inputs*/

    this.gestionForm.statusChanges.subscribe((changes) => {
      console.log(changes)
    })

    this.gestionForm.valueChanges.subscribe((changes) => {
      //Asi añadimos al objeto vacio de newProduct los valores del formulario
      this.newProduct = changes;
      console.log(this.newProduct);
    })

  }

  submitGestionForm() {
    this.submitted = true;
    console.log(this.gestionForm.value);
    console.log(this.gestionForm);
  }

  addToProducts() {
    this.newProduct.push();
  }



}

