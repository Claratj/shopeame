import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

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
