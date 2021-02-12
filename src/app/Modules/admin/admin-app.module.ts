import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFilterComponent  } from './adminComponents/admin-filter/admin-filter.component';
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
import { AdminCategoriesComponent } from './adminComponents/admin-categories/admin-categories.component';
import { AdminBrandsComponent } from './adminComponents/admin-brands/admin-brands.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailsComponent } from './adminComponents/admin-categories/category-details/category-details.component';
import { CategoryModalComponent } from './adminComponents/admin-categories/category-modal/category-modal.component';
import { BrandDetailsComponent } from './adminComponents/admin-brands/brand-details/brand-details.component';
import { BrandModalComponent } from './adminComponents/admin-brands/brand-modal/brand-modal.component';
import { AdminBrandService } from './adminComponents/admin-brands/admin-brand.service';

const routes: Routes = [
  {
    path: '' ,component: AdminHomeComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductStatisticsComponent },
      { path: 'customers', component: CustomerStatisticsComponent },
      { path: 'sellers', component: SellerStatisticsComponent },
      { path: 'orders', component: OrderStatisticsComponent },
      { path: 'brands', component: AdminBrandsComponent },
      { path: 'categories', component: AdminCategoriesComponent },
      { path: 'earings', component: EaringsStatisticsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "**", component: NotFoundComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminFilterComponent,
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
    CustomerTapsComponent,
    AdminCategoriesComponent,
    AdminBrandsComponent,
    CategoryDetailsComponent,
    CategoryModalComponent,
    BrandDetailsComponent,
    BrandModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    // RouterModule
    ReactiveFormsModule,
    CommonModule,

  ],
  
  // exports: [RouterModule],

  // this provide seperate service instance for module and it`s components
  providers: [AdminBrandService],

})
export class AdminModule { }
