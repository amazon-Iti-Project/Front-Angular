import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHomeComponent } from './sellerComponents/seller-home/seller-home.component';
import { SellerHomeHeaderComponent } from './sellerComponents/seller-home-header/seller-home-header.component';
import { SellerHomeLeftComponent } from './sellerComponents/seller-home-left/seller-home-left.component';
import { SellerHomeRightComponent } from './sellerComponents/seller-home-right/seller-home-right.component';
import { SellerAddProductComponent } from './sellerComponents/seller-add-product/seller-add-product.component';



@NgModule({
  declarations: [SellerHomeComponent, SellerHomeHeaderComponent, SellerHomeLeftComponent, SellerHomeRightComponent, SellerAddProductComponent],
  imports: [
    CommonModule
  ]
})
export class SellerModule { }
