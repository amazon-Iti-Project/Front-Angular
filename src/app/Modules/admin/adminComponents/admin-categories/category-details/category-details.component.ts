import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { IadminCategory, Icategory } from 'src/app/viewModel/Icategory';
import { AdminCategoryService } from '../admin-category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  categories:Icategory[]=[];
  adminCategories:IadminCategory[]=[];
  constructor(private catServ:CategoryService,private prodServ:ProductService,private adminCatServ:AdminCategoryService) { }

  ngOnInit(): void {
    console.log('details')
    this.adminCatServ.getSharedData().subscribe(res=>{
      console.log("data changed",res)
      if(res) this.reloadAllCategories();
    })
    this.getAllCategories();
    
  }

  getAllCategories(): void {
    // get all categories
    this.catServ.getAllCategories().subscribe(res => {
      this.categories = res;
      if (this.categories.length && this.categories) {
        for (let cat of this.categories) {
          this.prodServ.getProductsByCategoryId(cat.id).subscribe(res => {
            let adminCat = { categoty: cat, products: res }
            this.adminCategories.push(adminCat);
          })

        }
        console.log(this.adminCategories)
      }
    }
      , err => alert(`${err}`))
  }

  reloadAllCategories():void{
    this.adminCategories = [];
    this.getAllCategories();
  }

  
  navToOrder(category:IadminCategory):void{
    
  }

}
