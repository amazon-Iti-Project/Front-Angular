import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products:Iproduct[]=[]

  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe(res=>{
      console.log(res)
     this.products  =res

    },err=>console.log(err))
    
  }

}
