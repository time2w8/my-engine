import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuxuryProductsComponent } from './luxury-products/luxury-products.component';

const routes: Routes = [
  {path:'luxury-products', component: LuxuryProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
