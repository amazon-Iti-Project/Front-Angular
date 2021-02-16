import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
// by abanoub
import { OrdersHomeComponent } from './Components/orders-home/orders-home.component';
import { PackageTrackComponent } from './Components/package-track/package-track.component';
import { OrderNavBarComponent } from './Components/order-nav-bar/order-nav-bar.component';
// for bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveredPackageComponent } from './Components/delivered-package/delivered-package.component';
import { OrdersListComponent } from './Components/orders-list/orders-list.component';
import { OrdersRoutingModule } from './orders-routing.modules';
import { ArchivedOrderComponent } from './Components/archived-order/archived-order.component';
import { OrderCardComponent } from './Components/order-card/order-card.component';
import { OrdersService } from './orders.service';
import { HttpClientModule } from '@angular/common/http';
import { CanceledOrderComponent } from './Components/canceled-order/canceled-order.component';
import { DigitalOrdersComponent } from './Components/digital-orders/digital-orders.component';
import { CanceledListComponent } from './Components/canceled-list/canceled-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';



@NgModule({
  declarations: [
    PaymentComponent, CartComponent,
    OrdersHomeComponent,
    PackageTrackComponent,
    OrderNavBarComponent,
    DeliveredPackageComponent,
    OrdersListComponent,
    ArchivedOrderComponent,
    OrderCardComponent,
    CanceledOrderComponent,
    DigitalOrdersComponent,
    CanceledListComponent,
    ShippingFormComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    OrdersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrdersService]
})
export class OrdersModule { }
