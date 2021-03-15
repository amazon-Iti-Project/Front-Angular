import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Iorder } from 'src/app/viewModel/Iorder';
interface IadminOrder{
  order:Iorder;
  status:string;
}
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orders:IadminOrder[]= [];
  constructor(private orderServ:OrderService) { }

  ngOnInit(): void {
    this.orderServ.getAllOrders().subscribe(res=>{
      this.orders = res.map(order=>this.setOrderStatus(order))
    },err=>{
      console.log(err)
    })
  }

  navToOrder(order:Iorder):void{

  }

  setOrderStatus(order:Iorder):IadminOrder{
    let state:string;
    switch (order.status){
      case 1: state = "pending";
      break;
      case 2: state = "Arriving";
      break;
      case 3: state = "Delivered";
      break;
      case 4: state = "Archived";
      break;
      case 5: state = "Cancelled";
      break;
      case 6: state = "Cancelling";
      
    }
      return {order,status:state}
  }

}
