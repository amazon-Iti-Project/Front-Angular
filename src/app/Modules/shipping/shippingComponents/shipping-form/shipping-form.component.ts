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
import { ISelectedItem } from 'src/app/Modules/orders/cart/cart.component';
import { DELIVERY_STATE, PAYMENT_TYPE } from 'src/app/enums/enums';
import { CategoryService } from 'src/app/services/category/category.service';
import { Ishipping } from './../../../../viewModel/Ishipping';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})

export class ShippingFormComponent implements OnInit {
  user: Iuser | undefined = undefined;
  cartItems: ISelectedItem[] = [];
  totalPrice = 0;
  orderPayment: Ipayment | undefined = undefined;
  readonly  today = new Date();
  cancelValidationDate = new Date();
  orderForm = this.fb.group({});
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private cartService: CartService,
    private prodService: ProductService,
    private paymentService: PaymentService,
    private router: Router,) {

  }
  //       type:1,
  //       state:1,
  //       date: this.today.toString(),
  //       payment : this.totalPrice


  ngOnInit(): void {
    this.cancelValidationDate.setDate(this.today.getDate()+3)
    this.initOrderForm()
    this.setorderdProducts();
    this.getCurrentUser();

    this.orderForm.valueChanges.subscribe(console.log)
  }
  getCurrentUser() {
    let token = this.userService.isUserSignedIn()
    if (token) {
      this.userService.getUserByToken(token).subscribe(
        response => {
          if(response){
            this.user = response
            console.log(this.user)
            this.orderForm.controls["customer"].setValue(this.user.id)
          }else{
            alert('Sorry You must login first');
            this.router.navigateByUrl('/SignIn')
          }
        },
        error => console.log(error)
      );
    }
    else {
      alert('Sorry You must login first');
      this.router.navigateByUrl('/SignIn')
    }
  }
  setorderdProducts() {
    

    if (this.cartService.selectedItems.length >0) {
      this.orderForm.controls["products"].setValue(this.cartService.selectedItems);
      let shipping: Ishipping = { period: 0, shipPrice: 0 }
      let orderPrice = 0
      this.cartService.selectedItems.forEach(prod => {
        shipping.shipPrice += prod.shipping.shipPrice
        shipping.period += prod.shipping.period
        orderPrice += prod.price * (100 - prod.discount) / 100
      })
      this.orderForm.controls["shipmentPrice"].setValue(shipping.shipPrice);
      this.orderForm.controls["orderShip"].setValue(shipping.period);
      this.orderForm.controls["orderPrice"].setValue(orderPrice);
    } else {
      alert("please go to cart to procced")
      this.router.navigate(['/cart'])
    }
  }
  initOrderForm() {
    this.orderForm = this.fb.group({
      //addres only
      country: [''],
      name: ['', [Validators.required]],
      address1: ['', [Validators.minLength(10), Validators.required]],
      address2: ['', [Validators.minLength(10), Validators.required]],
      city: ['', [Validators.required]],
      state: [''],
      zipCode: ['', [Validators.minLength(5), Validators.maxLength(9), Validators.required]],
      phone: [''],
      //order rest
      customer: [undefined, Validators.required],
      status: [DELIVERY_STATE.Pending, Validators.required],
      shipmentPrice: [undefined, Validators.required],
      orderShip: [undefined, Validators.required],
      orderPrice: [undefined, Validators.required],
      products: [null, [Validators.nullValidator]],
      payment: this.fb.group({
        state: [PAYMENT_TYPE.cash, [Validators.required, ]],
        date: [this.today.toLocaleString(), [Validators.required, ]],
        payment: [null, ]
      }),
      dueDate: [null, ],//expected date
      orderDate: [this.today.toLocaleString(), [Validators.required, Validators.nullValidator]],// order submit date
      canCancelledUntil: [this.cancelValidationDate.toLocaleString(), [Validators.required, Validators.nullValidator]],// order cancel date validation
      deliveredDate: [null,],// actual delivery date

    });
    this.orderForm.valueChanges.subscribe((value)=>{
      console.log(value)
      console.log(this.orderForm.status)
      console.log("validation: ",this.orderForm.controls['address2'].status)
      
      // this.orderForm.validator
    })

  }


  getTotalShipment(allProducts: ISelectedItem[]): number {
    let ship = 0;
    allProducts.forEach(prod => ship += prod.product.shipping.shipPrice)
    return ship;
  }
  getShippingDuration(allProducts: ISelectedItem[]): number {
    let max = 0;
    allProducts.forEach(prod => {
      if (prod.product.shipping.period > max)
        max = prod.product.shipping.period;
    })
    return max;
  }
  async submitOrder() {
    this.setOrderDate();
   let response = await this.orderService.addNewOrder(this.orderForm.value).pipe(first()).toPromise()
        console.log(response)
        if(response){
          for(let product of response.products){
            let res = await this.prodService.getProductById(product.id).pipe(first()).toPromise()
                if(res){
                    this.prodService.updateProductQuantityById(res.id,res.quantity-product.quantity)
                    .subscribe(console.log)
              }
          }
        }
        this.router.navigateByUrl('/Orders/list')
  
  }
  setOrderDate() {
    this.orderForm.controls["orderDate"].setValue(this.today.getDate().toLocaleString());
    this.orderForm.controls["canCancelledUntil"].setValue(this.cancelValidationDate.toLocaleString());
   
    let expectedDate = new Date()
    expectedDate.setDate(this.today.getDate()+this.orderForm.controls["orderShip"].value)

    this.orderForm.controls["dueDate"].setValue(
      expectedDate.toLocaleString()
    );
  }

  getFormValue(): void {
    console.log(this.orderForm.valid)

  }
}
