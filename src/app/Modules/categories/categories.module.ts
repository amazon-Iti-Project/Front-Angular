import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetalisComponent } from './products-detalis/products-detalis.component';
import { RouterModule, Routes } from '@angular/router';
import { TestProductComponent } from './test-product/test-product.component';

const routes: Routes = [
  { path: 'product', component:ProductsDetalisComponent  },
]

@NgModule({
  declarations: [ProductsDetalisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class CategoriesModule { }
