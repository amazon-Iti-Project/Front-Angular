import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './adminComponents/sidebar/sidebar.component';
import { AdminHomeComponent } from './admin-home.component';
import { AdminHeaderComponent } from './adminComponents/admin-header/admin-header.component';
import { DashboardComponent } from './adminComponents/dashboard/dashboard.component';
import { ProductStatisticsComponent } from './adminComponents/product-statistics/product-statistics.component';
import { CustomerStatisticsComponent } from './adminComponents/customer-statistics/customer-statistics.component';
import { SellerStatisticsComponent } from './adminComponents/seller-statistics/seller-statistics.component';
import { OrderStatisticsComponent } from './adminComponents/order-statistics/order-statistics.component';
import { EaringsStatisticsComponent } from './adminComponents/earings-statistics/earings-statistics.component';
import { NotFoundComponent } from '../customer/components/not-found/not-found.component';
import { ProductSummaryComponent } from './adminComponents/product-statistics/product-summary/product-summary.component';
import { ProductExpectedComponent } from './adminComponents/product-statistics/product-expected/product-expected.component';
import { ProductTapsComponent } from './adminComponents/product-statistics/product-taps/product-taps.component';
import { ProductDetailsComponent } from './adminComponents/product-statistics/product-details/product-details.component';
import { OrderDetailsComponent } from './adminComponents/order-statistics/order-details/order-details.component';
import { OrderExpectedComponent } from './adminComponents/order-statistics/order-expected/order-expected.component';
import { OrderSummaryComponent } from './adminComponents/order-statistics/order-summary/order-summary.component';
import { OrderTapsComponent } from './adminComponents/order-statistics/order-taps/order-taps.component';
import { CustomerDetailsComponent } from './adminComponents/customer-statistics/customer-details/customer-details.component';
import { CustomerSummaryComponent } from './adminComponents/customer-statistics/customer-summary/customer-summary.component';
import { CutomerExpectedComponent } from './adminComponents/customer-statistics/cutomer-expected/cutomer-expected.component';
import { SellerDetailsComponent } from './adminComponents/seller-statistics/seller-details/seller-details.component';
import { SellerSummaryComponent } from './adminComponents/seller-statistics/seller-summary/seller-summary.component';
import { SellerExpectedComponent } from './adminComponents/seller-statistics/seller-expected/seller-expected.component';
import { SellerTapsComponent } from './adminComponents/seller-statistics/seller-taps/seller-taps.component';
import { CustomerTapsComponent } from './adminComponents/customer-statistics/customer-taps/customer-taps.component';

const routes: Routes = [
  {
    path: '' ,component: AdminHomeComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductStatisticsComponent },
      { path: 'customers', component: CustomerStatisticsComponent },
      { path: 'sellers', component: SellerStatisticsComponent },
      { path: 'orders', component: OrderStatisticsComponent },
      { path: 'earings', component: EaringsStatisticsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "**", component: NotFoundComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AdminHeaderComponent,
    SidebarComponent,
    AdminHomeComponent,
    ProductStatisticsComponent,
    OrderStatisticsComponent,
    CustomerStatisticsComponent,
    EaringsStatisticsComponent,
    DashboardComponent,
    SellerStatisticsComponent,
    ProductDetailsComponent,
    ProductSummaryComponent,
    ProductExpectedComponent,
    ProductTapsComponent,
    OrderDetailsComponent,
    OrderExpectedComponent,
    OrderSummaryComponent,
    OrderTapsComponent,
    CustomerDetailsComponent,
    CustomerSummaryComponent,
    CutomerExpectedComponent,
    SellerDetailsComponent,
    SellerSummaryComponent,
    SellerExpectedComponent,
    SellerTapsComponent,
    CustomerTapsComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    // RouterModule
  ],
  // exports: [RouterModule],
})
export class AdminModule { }
