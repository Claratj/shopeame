import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';

const routes: Routes = [
  { path: 'gestion', component: GestionPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
