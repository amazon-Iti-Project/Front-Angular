import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iorder } from 'src/app/viewModel/Iorder';
import { Ipayment } from 'src/app/viewModel/Ipayment';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})

export class ShippingFormComponent implements OnInit {

  lastID = 0;
  user : Iuser | undefined =undefined;
  cartItems: Iproduct[] = [];
  totalPrice=0;
  orderPayment : Ipayment | undefined = undefined;
  today = new Date();
  orderForm = new FormGroup({
    country : new FormControl(),
    name : new FormControl(),
    address1 : new FormControl(),
    address2 : new FormControl(),
    city : new FormControl(''),
    state : new FormControl(''),
    zipCode : new FormControl(''),
    phone : new FormControl('')
  });
  constructor(private userService: UserService,
    private orderService: OrderService,
    private cartService : CartService,
    private prodService : ProductService,
    private paymentService : PaymentService,
    private router : Router,private formBuilder : FormBuilder) {
      this.orderForm = this.formBuilder.group({
        country: [''],
        name: ['',[Validators.required]],
        address1:['',[Validators.minLength(10),Validators.required]],
        address2:['',[Validators.minLength(10),Validators.required]],
        city:['',[Validators.required]],
        state:[''],
        zipCode :['',[Validators.minLength(5),Validators.maxLength(9),Validators.required]],
        phone: [''] 
      });
    }

  ngOnInit(): void {
    // let token = "e428071a-cf40-76b7-a3b3-0db1dac700a7";
    let token = this.userService.isUserSignedIn()
    if(token){
      this.userService.getUserByToken(token).subscribe(
        response => {
          this.user = response
          this.prodService.getListOfProductsById(this.user.cart).subscribe(
            response => {
              this.cartItems = response
              this.totalPrice = this.cartService.getTotalPrice(response)
              this.orderPayment= {
                id: 1, //init.
                type:1,
                state:1,
                date: this.today.toString(),
                payment : this.totalPrice
              }
              this.paymentService.addNewPayment(this.orderPayment)
            },
            error => console.log(error)
          );
          console.log(this.user)
        },
        error => console.log(error)
      ); 
    }
    else{
      alert('Sorry You must login first');
      this.router.navigateByUrl('/SignIn')
    }
    // can we replace this part?
    this.orderService.getAllOrders().subscribe(
      response => {
        let lastEle = response.pop()
        this.lastID = (lastEle?.id!)
      },
      error => console.log(error)
    );
  }
  getTotalShipment(allProducts : Iproduct[]) : number{
    let ship = 0;
    allProducts.forEach(prod => ship += prod.shipping.shipPrice)
    return ship;
  }
  getShippingDuration(allProducts : Iproduct[]) : number {
    let max = 0;
    allProducts.forEach(prod => {
      if(prod.shipping.period > max)
        max = prod.shipping.period;
    })
    return max;
  }
  submitOrder() {
    let order: Iorder = {
      id: this.lastID+1,
      products: this.cartItems ,
      user: this.user?.id!,
      status: 1,
      payment: this.orderPayment!,
      address: this.orderForm.get('address1')?.value,
      orderShip: this.getTotalShipment(this.cartItems),
      orderPrice: this.totalPrice,
      dueDate: this.getShippingDuration(this.cartItems).toString(),
      orderDate: this.today.toString(), 
      canCancelledUntil: this.today.setDate(this.today.getDate()+3).toString()
    }
    this.orderService.addNewOrder(order).subscribe(
      response =>{
        console.log(response)
        this.router.navigateByUrl('/Orders/list')
      },
      error => console.log(error)
    )
  }
}
