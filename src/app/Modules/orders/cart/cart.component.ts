import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { Observable } from 'rxjs';
export interface ISelectedItem{
  product:Iproduct,
  orderCount:number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  // userId = 4; // get it from service
  currentUser : Iuser | null =null;
  cartItems : ISelectedItem[]=[];
  
  totalPrice = 0;
  constructor(private prodService : ProductService,
    private router : Router,private userService : UserService,
    private cartService : CartService) { }

  ngOnInit(): void {
    // let token = "aea407a0-7f44-fcd0-c325-b1b3cbbe7711"
    let token = this.userService.isUserSignedIn()
    if(token){
      this.userService.getUserByToken(token).subscribe(
        response => {
          this.currentUser = response
          if(response && response.cart){
            this.prodService.getListOfProductsById(response.cart)?.subscribe(
              result => {
                let cartProducts = result.map((item)=>{
                 let prod:ISelectedItem={product:item,orderCount:1}
                 return prod
                });
                console.log(this.cartItems)
                this.cartItems = cartProducts;
                this.cartService.selectedItems = this.cartItems;
                this.totalPrice = this.cartService.getTotalPrice(this.cartItems)
              },
              error => alert("error: "+error)
            );
          }

        },
        error => console.log("error: "+error)
      );
    }
  }
  deSelectAll(){
    // console.log('pressed!')
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // for( var i in checkboxes){
    //     checkboxes[i].removeAttribute("checked");
    // }
  }

  //it must be for all elements array ?? & it must affect product price and total price
  changeItemCount(product:ISelectedItem,val:number){
    product.orderCount = val;
    this.totalPrice = this.cartService.getTotalPrice(this.cartItems)

  }
  //must be deleted from json also
  deleteItem(prod : ISelectedItem){
   let userRes =  confirm("are you sure you want to remove this product")
   if(userRes){
    let num = this.cartItems.indexOf(prod);
    // this.currentUser?.cart.splice(num, 1);
    this.cartItems.splice(num, 1);
    this.totalPrice -= (prod.product.price*prod.orderCount);
    let userCart:number[] = this.cartItems.map(item=>item.product.id)
    if(this.currentUser)
    this.cartService.updateUserCart(this.currentUser,userCart).subscribe(console.log);
   }
    
  }
  saveLater(prod:ISelectedItem){
    //transparent background
  }
  proceedToCheckout(){
    this.router.navigateByUrl('/shippingDetails');
  }

}
