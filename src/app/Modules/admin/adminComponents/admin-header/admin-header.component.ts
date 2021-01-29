import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
  }

  // on click product link
getProducts():void {
  console.log("click")
  

}


}
