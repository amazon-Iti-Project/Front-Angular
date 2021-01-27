import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDepartmentsComponent } from './components/all-departments/all-departments.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  {path:'',component:AllDepartmentsComponent},
  {path:':depName',component:DepartmentComponent}
];

@NgModule({
  declarations: [AllDepartmentsComponent, DepartmentComponent],
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
