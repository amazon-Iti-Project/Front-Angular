import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestProductComponent } from './test-product/test-product.component';

const routes: Routes = [
  { path: 'product', component:TestProductComponent  },
]

@NgModule({
  declarations: [TestProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CategoriesModule { }
