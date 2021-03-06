import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './shared/components/item/item.component';
import { ItemListComponent } from './shared/components/item-list/item-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarsComponent } from './shared/components/stars/stars.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    GalleryComponent,
    FooterComponent,
    MenuComponent,
    GestionPageComponent,
    ItemComponent,
    ItemListComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    // CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

