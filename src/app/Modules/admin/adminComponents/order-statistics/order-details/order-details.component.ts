import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Iorder } from 'src/app/viewModel/Iorder';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orders:Iorder[]= [];
  constructor(private orderServ:OrderService) { }

  ngOnInit(): void {
    this.orderServ.getAllOrders().subscribe(res=>{
      this.orders = res
    },err=>{
      console.log(err)
    })
  }

  navToOrder(order:Iorder):void{

  }

}
