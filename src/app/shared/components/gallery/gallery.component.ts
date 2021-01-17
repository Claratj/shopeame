import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  changeView: string;

  figureChange : string;

  ratingBuy :string;

  info: string;

  listActive: string;

  @Input() list:any;

  constructor() { }

  ngOnInit(): void {

    this.gridView();
    // this.listView();
    
  }
  
  gridView(){
    this.changeView = 'col-12 col-sm-6 col-md-4 col-lg-3 card';
    this.figureChange = 'p-gallery__figure-grid';
    this.ratingBuy = 'justify-content-around ';
    this.listActive = '';
    this.info = '';

  }

  listView() {
    this.changeView = 'col-12 ';
    this.listActive = 'd-sm-flex';
    this.figureChange = 'p-gallery__figure-list align-items-center';
    this.info = 'flex-fill'
    this.ratingBuy = 'justify-content-between';
  }

  editProduct(item) {
    let productGestion = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      stars: item.stars,
      image: item.image
    }
    return productGestion;

  }
}