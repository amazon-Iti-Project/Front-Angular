import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeeService } from 'src/app/services/feeService/fee.service';
import { ProductService } from 'src/app/services/product/product.service';
import { adminIproduct, Iproduct } from 'src/app/viewModel/IProduct';
import { CategoryService } from 'src/app/services/category/category.service';
import { UserService } from './../../../../services/user/user.service';
import { Iuser } from './../../../../viewModel/Iuser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SellerModuleService } from './../../seller-module.service';

@Component({
  selector: 'app-seller-manage-inventory',
  templateUrl: './seller-manage-inventory.component.html',
  styleUrls: ['./seller-manage-inventory.component.scss'],
})
export class SellerManageInventoryComponent implements OnInit,OnDestroy {
  products:Iproduct[]=[]
  adminProducts:adminIproduct[]=[];
  filteredList:adminIproduct[]= []
  user:Iuser
  subscriptions:Subscription[]=[];

  constructor(private sellerServ:SellerModuleService,private router:Router,private userServ:UserService,private productServ:ProductService,private feeServ:FeeService,private catServ:CategoryService) { }
  ngOnDestroy(): void {
    for (let  sub of this.subscriptions){
      console.log('in loop')
      sub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.getCurrentUser()
    

    
  }
  getProducts(id:number) {
    // getProductsBySellerId(id)
    console.log(this.user);
  let sub =   this.productServ.getProductsBySellerId(id).subscribe(res=>{
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
    this.subscriptions.push(sub)
  }
  getCurrentUser(): void {
    let token = this.userServ.isUserSignedIn()
    if (token){
    let sub =  this.userServ.getUserByToken(token).subscribe(res => {
        this.user = res;
        this.getProducts(this.user.id)
      }, err => alert(err))
    this.subscriptions.push(sub)
  }
    else {
      alert('please Log in')
      this.router.navigate(['/home'])
    }
  }

  updateSellerProduct(prod:Iproduct):void{
    this.sellerServ.sendProductToUpdate(prod);
    this.router.navigate(['/seller/add'])
  }

  deleteSellerProduct(prod:adminIproduct):void{
    confirm("are you sure you want to delete this product")?
    this.productServ.deleteProduct(prod.product.id).subscribe(res =>{
     const index =  this.filteredList.indexOf(prod)
     if(index > -1)
     this.filteredList.splice(index,1)
    }):'';
  }

}
