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

  userId = 4; // get it from service
  currentUser : Iuser | null =null;
  cartItems : Iproduct[] = [];
  selectedProdCount = 1;
  totalPrice = 0;
  constructor(private cartService : CartService,private prodService : ProductService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.cartService.getUser(this.userId).subscribe(
      response => {
        this.currentUser = response
        this.currentUser.cart.forEach( id => {
          this.prodService.getProductById(id).subscribe(
            response => {
              this.cartItems.push(response)
              this.totalPrice += response.price
            },
            error => console.log(error)
          )
        });},
      error => console.log(error)
    )
  }
  deSelectAll(){
    console.log('pressed!')
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for( var i in checkboxes){
        checkboxes[i].removeAttribute("checked");
    }
  }
  //it must be for all elements array ?? & it must affect product price and total price
  changeItemCount(product:Iproduct,val:number){
    this.selectedProdCount = val;
  }
  //must be deleted from json also
  deleteItem(prod : Iproduct){
    this.cartItems.splice(this.cartItems.indexOf(prod), 1);
    this.totalPrice -= prod.price;
  }
  saveLater(prod:Iproduct){
    //transparent background
  }

}
