import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/services/feeService/fee.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Iproduct } from 'src/app/viewModel/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products:Iproduct[]=[]

  constructor(private productServ:ProductService,private feeServ:FeeService) { }

  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe(res=>{
      console.log(res)
     this.products  =res

    },err=>console.log(err))
    
  }

  getFee(feeId:number):number|void{
    this.feeServ.getFeeById(feeId).subscribe(res=>{
      console.log(res)
     return res.fee

    },err=>console.log(err))
  }
  

}
