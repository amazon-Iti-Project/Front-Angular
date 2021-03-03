import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeAuthenticatedComponent } from './admin-home-authenticated.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductStatisticsComponent } from '../product-statistics/product-statistics.component';
import { CustomerStatisticsComponent } from '../customer-statistics/customer-statistics.component';
import { SellerStatisticsComponent } from '../seller-statistics/seller-statistics.component';
import { OrderStatisticsComponent } from '../order-statistics/order-statistics.component';
import { AdminBrandsComponent } from '../admin-brands/admin-brands.component';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';
import { EaringsStatisticsComponent } from '../earings-statistics/earings-statistics.component';
import { NotFoundComponent } from 'src/app/appComponent/not-found/not-found.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminHomeComponent } from '../../admin-home.component';
import { AdminFilterComponent } from '../admin-filter/admin-filter.component';
import { ProductDetailsComponent } from '../product-statistics/product-details/product-details.component';
import { ProductSummaryComponent } from '../product-statistics/product-summary/product-summary.component';
import { ProductExpectedComponent } from '../product-statistics/product-expected/product-expected.component';
import { ProductTapsComponent } from '../product-statistics/product-taps/product-taps.component';
import { OrderDetailsComponent } from '../order-statistics/order-details/order-details.component';
import { OrderExpectedComponent } from '../order-statistics/order-expected/order-expected.component';
import { CustomerDetailsComponent } from '../customer-statistics/customer-details/customer-details.component';
import { OrderSummaryComponent } from '../order-statistics/order-summary/order-summary.component';
import { CutomerExpectedComponent } from '../customer-statistics/cutomer-expected/cutomer-expected.component';
import { SellerTapsComponent } from '../seller-statistics/seller-taps/seller-taps.component';
import { SellerExpectedComponent } from '../seller-statistics/seller-expected/seller-expected.component';
import { SellerDetailsComponent } from '../seller-statistics/seller-details/seller-details.component';
import { SellerSummaryComponent } from '../seller-statistics/seller-summary/seller-summary.component';
import { CustomerTapsComponent } from '../customer-statistics/customer-taps/customer-taps.component';
import { CustomerSummaryComponent } from '../customer-statistics/customer-summary/customer-summary.component';
import { OrderTapsComponent } from '../order-statistics/order-taps/order-taps.component';
import { BrandModalComponent } from '../admin-brands/brand-modal/brand-modal.component';
import { BrandDetailsComponent } from '../admin-brands/brand-details/brand-details.component';
import { CategoryModalComponent } from '../admin-categories/category-modal/category-modal.component';
import { CategoryDetailsComponent } from '../admin-categories/category-details/category-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminBrandService } from '../admin-brands/admin-brand.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '' ,component: AdminHomeAuthenticatedComponent, children: [
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
    AdminHomeAuthenticatedComponent,
    AdminHeaderComponent,
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
    BrandModalComponent,

  ],
  imports: [
RouterModule.forChild(routes),
    // RouterModule
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,

  ],
  
  // this provide seperate service instance for module and it`s components
  providers: [AdminBrandService,
    // you cant declare module in provided of service,  and try to declare it in module  providers  too like done below
    // AdminModuleService
  ],
})
export class AdminHomeAuthenticatedModule { }
