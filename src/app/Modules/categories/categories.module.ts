import { PaymentComponent } from './../orders/payment/payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetalisComponent } from './products-detalis/products-detalis.component';
import { RouterModule, Routes } from '@angular/router';
import { AllDepartmentsComponent } from './components/all-departments/all-departments.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './components/department/department.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentFilterComponent } from './components/department-filter/department-filter.component';
import { DepartmentCarouselComponent } from './components/department-carousel/department-carousel.component';
import { DepartmentBodyComponent } from './components/department-body/department-body.component';
import { DepartmentFooterComponent } from './components/department-footer/department-footer.component';
import { RecommentaionSectionComponent } from './components/department/recommentaion-section/recommentaion-section.component';
import { UserGuard } from 'src/app/guards/user.guard';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  { path: 'payment', component:PaymentComponent,canActivate:[UserGuard]  },
  // this is product id path
  { path: 'product/:pId', component:ProductsDetalisComponent  },
  {path:'search/:text',component:DepartmentComponent},
  {path:'department/:depName/:depId',component:DepartmentComponent},
  {path:'',component:AllDepartmentsComponent},

  // {path:':depId/:depName',component:DepartmentComponent}
]

@NgModule({
  declarations: [ProductsDetalisComponent,AllDepartmentsComponent, DepartmentComponent, DepartmentFilterComponent, DepartmentCarouselComponent, DepartmentBodyComponent, DepartmentFooterComponent, RecommentaionSectionComponent],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    TranslateModule,
    NgxPaginationModule
  ],
  // exports: [RouterModule],
  // bootstrap: [AllDepartmentsComponent]
})
export class CategoriesModule {

}
