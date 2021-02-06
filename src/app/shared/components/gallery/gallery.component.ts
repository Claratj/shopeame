import { ProductsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public isActiveList: boolean = false;
  public isActiveGrid: boolean = true;

  changeView: string;

  figureChange: string;

  ratingBuy: string;

  info: string;

  listActive: string;

  @Input() list: any;

  clearProd: any;
  search: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.getProducts();
    this.gridView();
    // this.listView();

  }

  // cambiando a item
  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.list = products;
      this.clearProd = products;
    });

  }

  gridView() {
    this.changeView = 'col-12 col-sm-6 col-md-4 col-lg-3 card justify-content-end';
    this.figureChange = 'p-gallery__figure-grid__img';
    this.ratingBuy = 'justify-content-around ';
    this.isActiveList = false;
    this.isActiveGrid = true;
    this.info = '';


  }

  listView() {
    this.changeView = 'col-12';
    this.listActive = 'd-sm-flex';
    this.figureChange = 'p-gallery__figure-list align-items-center';
    this.info = 'flex-fill'
    this.ratingBuy = 'justify-content-between';
    this.isActiveList = true;
    this.isActiveGrid = false;

  }


  editProduct(item) {
    // let productGestion = {
    //   id: item.id,
    //   name: item.name,
    //   price: item.price,
    //   description: item.description,
    //   stars: item.stars,
    //   image: item.image
    // }
    // this.productsService.editItem(productGestion);
    this.productsService.editItem(item);

  }

  //barra de búsqueda-filtrado de la información
  toSearch(word: any) {
    this.list = this.clearProd;
    this.list = this.list.filter(product => product.name.toLowerCase().includes(word.toLowerCase()));
  }


}