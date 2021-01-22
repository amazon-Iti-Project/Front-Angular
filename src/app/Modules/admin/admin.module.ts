import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './adminComponents/header/header.component';
import { SidebarComponent } from './adminComponents/sidebar/sidebar.component';
import { ProductStatisticsComponent } from './adminComponents/product-statistics/product-statistics.component';
import { OrderStatisticscsComponent } from './adminComponents/order-statistics/order-statisticscs.component';
import { CustomerStatisticscsComponent } from './adminComponents/customer-statistics/customer-statisticscs.component';
import { EaringsStatisticscsComponent } from './adminComponents/earings-statistics/earings-statisticscs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ProductStatisticsComponent,
    OrderStatisticscsComponent,
    CustomerStatisticscsComponent,
    EaringsStatisticscsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
