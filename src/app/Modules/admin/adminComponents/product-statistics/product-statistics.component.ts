import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-product-statistics',
  templateUrl: './product-statistics.component.html',
  styleUrls: ['./product-statistics.component.scss']
})
export class ProductStatisticsComponent implements OnInit ,AfterViewInit {
  constructor() { 
    console.log("product state")

  }


  ngOnInit(): void {
   

  }
  ngAfterViewInit(): void {
    
  }


}
