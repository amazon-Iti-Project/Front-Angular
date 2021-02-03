import { PaymentComponent } from './../orders/payment/payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetalisComponent } from './products-detalis/products-detalis.component';
import { RouterModule, Routes } from '@angular/router';
import { AllDepartmentsComponent } from './components/all-departments/all-departments.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  { path: 'payment', component:PaymentComponent  },
  // this is product id path
  { path: 'product/:pId', component:ProductsDetalisComponent  },
  {path:'',component:AllDepartmentsComponent},
  {path:':depName',component:DepartmentComponent}
]

@NgModule({
  declarations: [ProductsDetalisComponent,AllDepartmentsComponent, DepartmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  bootstrap: [AllDepartmentsComponent]
})
export class CategoriesModule {

}
