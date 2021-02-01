import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHomeComponent } from './sellerComponents/seller-home/seller-home.component';
import { SellerHomeHeaderComponent } from './sellerComponents/seller-home-header/seller-home-header.component';
import { SellerHomeLeftComponent } from './sellerComponents/seller-home-left/seller-home-left.component';
import { SellerHomeRightComponent } from './sellerComponents/seller-home-right/seller-home-right.component';
import { SellerAddProductComponent } from './sellerComponents/seller-add-product/seller-add-product.component';
import { SellerHomeBodyComponent } from './sellerComponents/seller-home-body/seller-home-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:'home',component:SellerHomeComponent},
  {path:'add',component:SellerAddProductComponent},
]

@NgModule({
  declarations: [
    SellerHomeComponent,
    SellerHomeHeaderComponent,
    SellerHomeLeftComponent,
    SellerHomeRightComponent,
    SellerAddProductComponent,
    SellerHomeBodyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    //have service to use Http requests for apis 
    HttpClientModule,
    // for reactive forms
    ReactiveFormsModule

  ]
})
export class SellerModule { }
