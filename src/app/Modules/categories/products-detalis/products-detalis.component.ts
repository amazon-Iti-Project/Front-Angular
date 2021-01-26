import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Iproduct } from 'src/app/viewModel/IProduct';
import{Location} from '@angular/common'

@Component({
  selector: 'app-products-detalis',
  templateUrl: './products-detalis.component.html',
  styleUrls: ['./products-detalis.component.scss']
})


export class ProductsDetalisComponent implements OnInit {
  prd:Iproduct|null=null;
  prdID:number=0;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pService:ProductService,
    private location: Location) { }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
        let prdIDParam = params.get('1')
        this .prdID= (prdIDParam)? parseInt(prdIDParam) : 0;
        // this.prd= this.prdService.getProductByID(this.prdID);
        this.pService.getProductById(this.prdID).subscribe(
          (res)=>{
            this.prd=res;
          }
        )


      })

     console.log(this.prdID);
     console.log(this.prd);
    }

}
