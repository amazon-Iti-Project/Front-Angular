import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
export interface ISelectedItem{
  product:Iproduct,
  orderCount:number,
  checked:Boolean,
  netPrice:number,
  valid:boolean,
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
  orderedNumber:number = 0
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
          if(response && response.cart && response.cart.length>0){
            this.prodService.getListOfProductsById(response.cart)?.subscribe(
              result => {
                let cartProducts = result.map((item)=>{
                 let prod:ISelectedItem={product:item,orderCount:1,checked:false,
                  valid:item.quantity>=1,
                  netPrice:item.price*((100-item.discount)/100)
                }

                 return prod
                });
                cartProducts.forEach(prod => {
                  prod.valid == (prod.product.quantity>=prod.orderCount)
                });
                console.log(this.cartItems)
                this.cartItems = cartProducts;
                this.setOrdersNumber()
                this.totalPrice = this.cartService.getTotalPrice(this.getCheckedProducts(this.cartItems))
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
    // console.log(product.product.quantity ,product.orderCount)
    // console.log(product.product.quantity >= product.orderCount)
    product.valid = product.product.quantity >= product.orderCount
    console.log(product)
    this.setOrdersNumber()
    this.totalPrice = this.cartService.getTotalPrice(this.getCheckedProducts(this.cartItems))
  }



  setOrdersNumber():void{
    let orderNum = 0
   let list = this.getCheckedProducts(this.cartItems)
   
   list.forEach((prod)=>{
    orderNum += prod.orderCount;
    console.log(orderNum)
   })
   this.orderedNumber = orderNum
    
}

getCheckedProducts(cartItems:ISelectedItem[]):ISelectedItem[]{
  let orderList:ISelectedItem[] = cartItems.filter(item=>item.checked)
  return orderList;

}

  //must be deleted from json also
  deleteItem(prod : ISelectedItem){
   let userRes =  confirm("are you sure you want to remove this product")
   if(userRes){
    let num = this.cartItems.indexOf(prod);
    // this.currentUser?.cart.splice(num, 1);
    this.cartItems.splice(num, 1);
    console.log(this.cartItems)
    this.setOrdersNumber()
   this.totalPrice = this.cartService.getTotalPrice(this.getCheckedProducts(this.cartItems))
    let userCart:number[] = this.cartItems.map(item=>item.product.id)
    if(this.currentUser)
    this.cartService.updateUserCart(this.currentUser,userCart).subscribe(console.log);
   }
    
  }
  saveLater(prod:ISelectedItem){
    //transparent background
  }
  proceedToCheckout(){
    let products = this.cartItems.filter((item)=> item.checked);
    let productOrders = products.map(item=>{
      let prod =  item.product
      prod.quantity =  item.orderCount
      return prod;
     })
    this.cartService.selectedItems = productOrders;
    this.router.navigateByUrl('/shippingDetails');
  }

  checkBtnCheckEvent(product:ISelectedItem):void{
    product.checked = !product.checked;
    this.setOrdersNumber()
    this.totalPrice = this.cartService.getTotalPrice(this.getCheckedProducts(this.cartItems))

    console.log("checked:",product.checked)
  }

}
