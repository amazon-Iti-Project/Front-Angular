import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Iorder } from 'src/app/viewModel/Iorder';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
// import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {

  shippingForm = new FormGroup({
    country: new FormControl(),
    name: new FormControl(),
    address1: new FormControl(),
    address2: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    phoneNum: new FormControl()
  });
  lastID =0;
  customerID = 1; //get from login service
  user : Iuser | undefined =undefined;
  cartItems: Iproduct[] = [];
  totalPrice=0;
  constructor(private formBuilder: FormBuilder,
    private orderService: OrderService,
    private cartService : CartService,
    private prodService : ProductService) {
    this.shippingForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address1: ['Street address, P.O.box, company name, c/o', [Validators.required]],
      address2: ['Apartment, suite, unit, building, floor, etc.', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      phoneNum: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      response => this.lastID = response.slice(-1)[0].id,
      error => console.log(error)
    );
    this.cartService.getUser(this.customerID).subscribe(
      response => { this.user= response },
      error => console.log(error)
    );
    this.user?.cart.forEach( id => {
      console.log(id)
      this.prodService.getProductById(id).subscribe(
        response => {
          this.cartItems.push(response)
          this.totalPrice += response.price
        },
        error => console.log(error)
      )
    });
  }
  submitOrder() {
    let order: Iorder = {
      id: this.lastID+1,
      products: this.cartItems , // products id
      user: this.customerID, // user id
      status: 1,
      payment: {
        id: 1, //init.
        type:1,
        state:1,   // paid , payment
        date: '2-2021', // add current data
        payment : this.totalPrice// how much $
      }, // paymentId >> object 
      address: this.shippingForm.get('address1')?.value,
      orderShip: this.totalPrice,   // $
      orderPrice: this.totalPrice,
      dueDate: '3days', // duration expected for delivery // biggest of products shipping
      orderDate: '2-2021', // date of order created
      canCancelledUntil: '3-2021' 
    }
    this.orderService.addNewOrder(order).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }
}
