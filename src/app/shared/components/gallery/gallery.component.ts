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

  @Input() list: any;

  clearProd: any;
  search: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.getProducts();
    this.gridView();

  }

  // cambiando a item
  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.list = products;
      this.clearProd = products;
    });

  }

  gridView() {
    this.changeView = 'col-12 col-sm-6 col-md-4 col-lg-3 justify-content-end';
    this.isActiveList = false;
    this.isActiveGrid = true;
    // this.info = '';

  }

  listView() {
    this.isActiveList = true;
    this.isActiveGrid = false;

  }




  //barra de búsqueda-filtrado de la información
  toSearch(word: any) {
    this.list = this.clearProd;
    this.list = this.list.filter(product => product.name.toLowerCase().includes(word.toLowerCase()));
  }


}