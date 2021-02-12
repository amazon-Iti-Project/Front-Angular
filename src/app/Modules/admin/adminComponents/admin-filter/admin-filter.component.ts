import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../../services/category/category.service';
import { Icategory } from 'src/app/viewModel/Icategory';
import { Ibrand } from 'src/app/viewModel/Ibrand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.scss']
})
export class AdminFilterComponent implements OnInit {
  departments:Icategory[]=[];
  brands:Ibrand[]=[];
  filterView:any = {department:3,brand:3}
  constructor(private catServ:CategoryService,private brandServ:BrandService) { }

  ngOnInit(): void {
    this.catServ.getAllCategories().subscribe(res=>this.departments = res,err=>alert(err))
    this.brandServ.getAllBrands().subscribe(res=>this.brands = res,err=>alert(err))
  }

  showMoreDepList(showmore:any,showless:any,key:string):void{
    if(key === 'department'){
      this.filterView[key] = this.departments.length;
      showmore.classList.add("d-none")
      showless.classList.remove("d-none")
    }else{
      this.filterView[key] = this.brands.length;
      showmore.classList.add("d-none")
      showless.classList.remove("d-none")
    }

    // console.log(e.target)
  }
  showLessDepList(showmore:any,showless:any):void{
    this.filterView.department = 3;
    showless.classList.add("d-none")
    showmore.classList.remove("d-none")
    // console.log(e.target)
  }

  // on select brand or department
  updateDepFiltList(filter:any):void{
    console.log(filter)
  }


}
