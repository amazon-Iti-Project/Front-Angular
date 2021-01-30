import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [PaymentComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
