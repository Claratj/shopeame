import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  
  products:any ;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {




    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

    // printStars(){
    //   console.log(this.products.stars);
      
    // }
}
