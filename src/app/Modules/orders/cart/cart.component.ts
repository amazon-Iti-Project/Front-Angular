import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  userId = 1; // git it from service
  currentUser : Iuser | null =null;
  cartItems : Iproduct[] = [];
  totalPrice = 0;
  constructor(private cartService : CartService,private prodService : ProductService) { }

  ngOnInit(): void {
    this.getUser()
    console.log("ngOnInit")
    console.log(this.currentUser)
    // this.currentUser?.cart.forEach( id => {
    //   console.log(id)
    //   this.prodService.getProductById(id).subscribe(
    //     response => {this.cartItems.push(response)
    //       console.log(response)
    //       console.log(this.cartItems) },
    //     error => console.log(error)
    //   )
    // });
    console.log("end")

  }
  getUser(){
    this.cartService.getUser(this.userId).subscribe(
      response => {this.currentUser = response
      console.log(response)
      console.log(this.currentUser)
      this.currentUser.cart.forEach( id => {
        console.log(id)
        this.prodService.getProductById(id).subscribe(
          response => {this.cartItems.push(response)
            console.log(response)
            console.log(this.cartItems)
            this.totalPrice += response.price
          },
          error => console.log(error)
        )
      });},
      error => console.log(error)
    )
  }




  deSelectAll(){
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // for( var i in checkboxes){
    //     checkboxes[i].removeAttribute("checked");
    }

calcTotalPrice(){
  // var total=0.0;
  // var prices = document.getElementsByName("price-tag");
  // var totalTag = document.getElementsByName("total-price-tag");
  // for(var i=0;i<prices.length;i++){
  //     total += parseFloat(prices[i].innerText);
  // }
  // for(var i=0;i<totalTag.length;i++){
  //     totalTag[i].innerHTML = total;
  // }
  }

// $(".dropdown-item").click(function(){
//     var selected_val = $(this).attr("value");
//     $("#drop-val").html(selected_val);
// });

}
