import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/services/feeService/fee.service';
import { ProductService } from 'src/app/services/product/product.service';
import { adminIproduct, Iproduct } from 'src/app/viewModel/IProduct';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-seller-manage-inventory',
  templateUrl: './seller-manage-inventory.component.html',
  styleUrls: ['./seller-manage-inventory.component.scss']
})
export class SellerManageInventoryComponent implements OnInit {
  products:Iproduct[]=[]
  adminProducts:adminIproduct[]=[];
  filteredList:adminIproduct[]= []

  constructor(private productServ:ProductService,private feeServ:FeeService,private catServ:CategoryService) { }

  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe(res=>{
      console.log(res)
     this.products  =res
     if(this.products && this.products.length){
       for(let product of  this.products){
          this.catServ.getCategoryById(product.category).subscribe(res=>{
            this.adminProducts.push({product:product,category:res})
          },err=> alert(err));
       }
       this.filteredList = this.adminProducts
     }

    },err=>console.log(err))
    
  }

}
