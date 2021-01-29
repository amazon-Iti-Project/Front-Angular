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
import { ProductDetailsComponent } from './adminComponents/product-statistics/product-details/product-details.component';
import { ProductSummaryComponent } from './adminComponents/product-statistics/product-summary/product-summary.component';
import { ProductExpectedComponent } from './adminComponents/product-statistics/product-expected/product-expected.component';
import { ProductTapsComponent } from './adminComponents/product-statistics/product-taps/product-taps.component';

// const routes:Routes = [
//   // {path:'home',component:AdminHomeComponent},
//   { path: 'home1', loadChildren:()=> import('./admin-home/admin-home.module').then(module =>AdminHomeModule ) },

// ]
const routes: Routes = [
  {
    path: "", component: AdminHomeComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductStatisticsComponent },
      { path: 'customers', component: CustomerStatisticsComponent },
      { path: 'sellers', component: SellerStatisticsComponent },
      { path: 'orders', component: OrderStatisticsComponent },
      { path: 'earings', component: EaringsStatisticsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: "**", component: NotFoundComponent }
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
    ProductTapsComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    // AdminHomeModule
  ],
  // exports: [RouterModule],
})
export class AdminModule { }
