import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from './../../../../services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
categorysNumber:number|undefined;
brandsNumber:number|undefined;
productsNumber:number|undefined;
productsValue:number=0;
earings:number=0;
users:number=0;

  constructor(private catServ:CategoryService,private brandServ:BrandService,private prodServ:ProductService,
    private userServ:UserService) { }

  ngOnInit(): void {
    this.catServ.getAllCategories().subscribe(res=>this.categorysNumber=res.length,err=>alert(err))
    this.brandServ.getAllBrands().subscribe(res=>this.brandsNumber=res.length,err=>alert(err))
    this.prodServ.getAllProducts().subscribe(res=>{
      this.productsNumber=res.length
      for(let prod of res){
        if(prod.price as number){
          this.productsValue += prod.price
          this.earings += prod.fee.fee
        }
      }
    },err=>alert(err))
    this.userServ.getAllUsers().subscribe(res=>this.users =res.length,err=>alert(err))

  }

}
