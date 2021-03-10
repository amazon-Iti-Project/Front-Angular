import { Component, Input, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Ibrand } from 'src/app/viewModel/Ibrand';
import { Icategory } from 'src/app/viewModel/Icategory';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-department-filter',
  templateUrl: './department-filter.component.html',
  styleUrls: ['./department-filter.component.scss']
})
export class DepartmentFilterComponent implements OnInit {
  @Input() productsList: Iproduct[]|undefined=[];
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
  showLessDepList(showmore:any,showless:any,key:string):void{

    if(key === 'department'){
      this.filterView.department = 3;

    }else{
      this.filterView.brand = 3;
    }
    showless.classList.add("d-none")
    showmore.classList.remove("d-none")

    // console.log(e.target)
  }

  // on select brand or department
  updateDepFiltList(filter:any):void{
    console.log(filter)
  }

}


// <div class=" left-menu">
//     <div id="department" class="mb-3">
//         <strong><span class="heading">{{'department.sideMenuHeader' |translate}}</span></strong><br>
//         <a href="#"><span>{{'department.menuDep7' |translate}} & {{'department.tablets' |translate}}</span></a><br>
//         <div class="side-links">
//             <a href="#"><span>{{'department.traditionalComputer' |translate}}</span></a><br>
//             <a href="#"><span>{{'department.twoInOne' |translate}}</span></a>
//         </div>
//         <a id="show-more-links" href="#">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 class="bi bi-chevron-down" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd"
//                     d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
//             </svg>
//             <span>{{'department.seeMoreDeps' |translate}}</span>
//         </a>
//     </div>
//     <div id="reviews" class="mb-3">
//         <strong><span class="heading">{{'department.customerReview' |translate}}</span></strong><br>
//         <a href="#">
//             <div class="rating mx-0">
//                 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
//                     class="fas fa-star"></i><i class="far fa-star"></i>
//                 <span>& {{'department.up' |translate}}</span>
//             </div>
//         </a>
//         <a href="#">
//             <div class="rating mx-0">
//                 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
//                     class="far fa-star"></i><i class="far fa-star"></i>
//                 <span>& {{'department.up' |translate}}</span>
//             </div>
//         </a>
//         <a href="#">
//             <div class="rating mx-0">
//                 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i
//                     class="far fa-star"></i><i class="far fa-star"></i>
//                 <span>& {{'department.up' |translate}}</span>
//             </div>
//         </a>
//         <a href="#">
//             <div class="rating mx-0">
//                 <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i
//                     class="far fa-star"></i><i class="far fa-star"></i>
//                 <span>& {{'department.up' |translate}}</span>
//             </div>
//         </a>
//     </div>
//     <div id="brand" class="mb-3">
//         <strong><span class="heading">{{'department.brand' |translate}}</span></strong><br>

//                     <!-- <ng-container *ngFor="let item of productsList.brand">
//             <a href="#">
//                 <input type="checkbox"> {{item}}
//             </a><br>
//         </ng-container> -->
//         <a id="show-more-links" href="#">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 class="bi bi-chevron-down" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd"
//                     d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
//             </svg>
//             <span>{{'department.seeMore' |translate}}</span>
//         </a>
//     </div>
//     <div id="price-filter" class="mb-3">
//         <strong><span class="heading">{{'department.price' |translate}}</span></strong><br>
//         <a href="#">
//             <span>{{'department.under' |translate}} $500</span>
//         </a><br>
//         <a href="#">
//             <span>$500 {{'department.to' |translate}} $600</span>
//         </a><br>
//         <a href="#">
//             <span>$600 {{'department.to' |translate}} $700</span>
//         </a><br>
//         <a href="#">
//             <span>$700 {{'department.to' |translate}} $800</span>
//         </a><br>
//         <a href="#">
//             <span>$800 {{'department.to' |translate}} $1000</span>
//         </a><br>
//         <a href="#">
//             <span>$1000 & {{'department.above' |translate}}</span>
//         </a><br>
//         <div class="row d-flex justify-content-around">
//             <div class="input-group my-3 total-grp">
//                 <div class="input-group-prepend">
//                     <button class="btn btn-outline-secondary min-value" type="button">$</button>
//                 </div>
//                 <input type="text" class="form-control min-input" placeholder="Min">
//             </div>
//             <div class="input-group my-3 total-grp">
//                 <div class="input-group-prepend">
//                     <button class="btn btn-outline-secondary min-value" type="button">$</button>
//                 </div>
//                 <input type="text" class="form-control min-input" placeholder="Max">
//             </div>
//             <button type="button" class="btn btn-secondary go-btn my-3">{{'department.go' |translate}}</button>
//         </div>
//     </div>
//     <div id="os" class="mb-3">
//         <strong><span class="heading">{{'department.computerOS' |translate}}</span></strong><br>
//         <a href="#">
//             <span>Windows</span>
//         </a><br>
//         <a href="#">
//             <span>Macintosh OS</span>
//         </a><br>
//         <a href="#">
//             <span>Linux</span>
//         </a><br>
//         <a href="#">
//             <span>Chrome OS</span>
//         </a><br>
//     </div>
//     <div id="activity" class="mb-3">
//         <strong><span class="heading">{{'department.computerActivityType' |translate}}</span></strong><br>
//         <a href="#">
//             <input type="checkbox"> Gaming
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> Business
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> Personal
//         </a><br>
//     </div>
//     <div id="disp-size" class="mb-3">
//         <strong><span class="heading">{{'department.laptopSize' |translate}}</span></strong><br>
//         <a href="#">
//             <input type="checkbox"> 17 {{'department.inches' |translate}} & {{'department.above' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 16 {{'department.to' |translate}} 16.9 {{'department.inches' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 15 {{'department.to' |translate}} 15.9 {{'department.inches' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 14 {{'department.to' |translate}} 14.9 {{'department.inches' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 13 {{'department.to' |translate}} 13.9 {{'department.inches' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 12 {{'department.to' |translate}} 12.9 {{'department.inches' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 11 {{'department.to' |translate}} 11.9 {{'department.inches' |translate}}
//         </a><br>
//         <a href="#">
//             <input type="checkbox"> 11 {{'department.inches' |translate}} & {{'department.under' |translate}}
//         </a><br>
//     </div>
//             </div>
