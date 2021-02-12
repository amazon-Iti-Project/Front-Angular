import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ProductService } from 'src/app/services/product/product.service';
import { IadminBrand, Ibrand } from 'src/app/viewModel/Ibrand';
import { AdminBrandService } from '../admin-brand.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {
  brands:Ibrand[]=[];
  adminbrands:IadminBrand[]=[];
  constructor(private brandServ:BrandService,private prodServ:ProductService,private adminBrandServ:AdminBrandService) { }

  ngOnInit(): void {
    console.log('details')
    this.adminBrandServ.getSharedData().subscribe(res=>{
      console.log("data changed",res)
      if(res) this.reloadAllbrands();
    })
    this.getAllbrands();
    
  }

  getAllbrands(): void {
    // get all brands
    this.brandServ.getAllBrands().subscribe(res => {
      this.brands = res;
      if (this.brands.length && this.brands) {
        for (let brand of this.brands) {
          this.prodServ.getProductsByCategoryId(brand.id).subscribe(res => {
            let adminbrand = { brand: brand, products: res }
            this.adminbrands.push(adminbrand);
          })

        }
        console.log(this.adminbrands)
      }
    }
      , err => alert(`${err}`))
  }

  reloadAllbrands():void{
    this.adminbrands = [];
    this.getAllbrands();
  }

  
  navToOrder(brand:IadminBrand):void{
    
  }

}
