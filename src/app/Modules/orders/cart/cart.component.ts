import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { ProductSummaryComponent } from '../../admin/adminComponents/product-statistics/product-summary/product-summary.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // userId = 4; // get it from service
  currentUser : Iuser | null =null;
  cartItems : Iproduct[] = [];
  selectedProdCount = 1;
  totalPrice = 0;
  constructor(private prodService : ProductService,
    private router : Router,private userService : UserService,
    private cartService : CartService) { }

  ngOnInit(): void {
    // let token = "e428071a-cf40-76b7-a3b3-0db1dac700a7"
    let token = this.userService.isUserSignedIn()
    if(token){
      this.userService.getUserByToken(token).subscribe(
        response => {
          this.currentUser = response
          this.prodService.getListOfProductsById(response.cart).subscribe(
            result => {
              console.log(this.cartItems)
              this.cartItems = result
              this.totalPrice = this.cartService.getTotalPrice(this.cartItems)
            },
            error => alert("error: "+error)
          );
        },
        error => console.log("error: "+error)
      )
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
  changeItemCount(product:Iproduct,val:number){
    this.selectedProdCount = val;
  }
  //must be deleted from json also
  deleteItem(prod : Iproduct){
    let num = this.cartItems.indexOf(prod);
    // this.currentUser?.cart.splice(num, 1);
    this.cartItems.splice(num, 1);
    this.totalPrice -= prod.price;
    console.log()
  }
  saveLater(prod:Iproduct){
    //transparent background
  }
  proceedToCheckout(){
    this.router.navigateByUrl('/shippingDetails');
  }

}
