import { OrderStatisticsComponent } from './adminComponents/order-statistics/order-statistics.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './adminComponents/sidebar/sidebar.component';
import { ProductStatisticsComponent } from './adminComponents/product-statistics/product-statistics.component';
import { DashboardComponent } from './adminComponents/dashboard/dashboard.component';
import { AdminHomeComponent } from './adminComponents/admin-home/admin-home.component';
import { AdminHeaderComponent } from './adminComponents/admin-header/admin-header.component';
import { SellerStatisticsComponent } from './adminComponents/seller-statistics/seller-statistics.component';
import { EaringsStatisticsComponent } from './adminComponents/earings-statistics/earings-statistics.component';
import { CustomerStatisticsComponent } from './adminComponents/customer-statistics/customer-statistics.component';

const routes:Routes = [
  {path:'home',component:AdminHomeComponent}
]

@NgModule({
  declarations: [
    AdminHeaderComponent,
    SidebarComponent,
    ProductStatisticsComponent,
    OrderStatisticsComponent,
    CustomerStatisticsComponent,
    EaringsStatisticsComponent,
    AdminHomeComponent,
    DashboardComponent,
    SellerStatisticsComponent,
    EaringsStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
