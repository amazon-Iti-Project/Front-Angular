import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  
  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
  
  }

  getDashBoard() {

  }

  
getCustomers():void{}
getSellers():void {}
getEartings():void {}
getOrders():void {}

}
