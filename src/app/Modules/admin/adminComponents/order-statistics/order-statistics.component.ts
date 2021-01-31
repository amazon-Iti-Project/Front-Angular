import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-order-statistics',
  templateUrl: './order-statistics.component.html',
  styleUrls: ['./order-statistics.component.scss']
})
export class OrderStatisticsComponent implements OnInit {

  constructor(private orderSer:OrderService,private paymentServ:PaymentService) {


   }

  ngOnInit(): void {
    this.orderSer.getAllOrders().subscribe(res=>console.log(res),err=>console.log(err))
  }

  getPaymentOfOrder(paymentId:number):void{
    this.paymentServ.getPaymentById(paymentId).subscribe(res=>console.log(res),err=>console.log(err))

  }

  

}
