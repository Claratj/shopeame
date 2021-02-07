
import { ProductsService } from '../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // figureChange: string;

  // ratingBuy: string;

  // info: string;

  // description: string;

  // listActive: string;

  @Input() list: any;

  @Input() item: any;

  clearProd: any;
  search: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.list = products;
      this.clearProd = products;
    });
  }

  editProduct(item) {

    this.productsService.editItem(item);

  }


}
