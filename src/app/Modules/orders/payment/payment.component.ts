import { Ipayment } from './../../../viewModel/Ipayment';
import { OrderService } from 'src/app/services/order/order.service';
import { Iorder } from 'src/app/viewModel/Iorder';
import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  ord:Iorder|null=null;
  // this is passed Id >>>
  oID:number=1;
  total:number=1;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private oService:OrderService,
    private location: Location) { }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
        let oIDParam = params.get('Id')
        this .oID= (oIDParam)? parseInt(oIDParam) : 1;
        this.oService.getOrderById(this.oID).subscribe(
          (res)=>{
            console.log(res)
            this.ord=res;
          }
        )

      })

     console.log(this.oID);
     console.log(this.ord);
    }

    calc(x:number , y:number){
      this.total=x+y;
      return this.total;


    }

}

