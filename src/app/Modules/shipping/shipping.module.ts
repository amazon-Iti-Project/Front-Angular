import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShippingRoutingModule } from './shipping-routing.modules';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    ShippingRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPayPalModule,

  ]
})
export class ShippingModule { }
