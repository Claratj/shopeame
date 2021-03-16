import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() item: any;
  @Input() starRating = 0;

  // list: any;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    // this.getProducts();
  }

  // getProducts() {
  //   this.productsService.getProducts().subscribe(products => {
  //     this.list = products;
  //     // this.clearProd = products;
  //   });
  // }

}
