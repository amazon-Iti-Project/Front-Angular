import { Ipayment } from './../../../viewModel/Ipayment';
import { OrderService } from 'src/app/services/order/order.service';
import { Iorder } from 'src/app/viewModel/Iorder';
import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from './../../../services/user/user.service';
import { Iuser } from './../../../viewModel/Iuser';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  orders:Iorder[]|undefined;
  // this is passed Id >>>
  user:Iuser|undefined;
  total:number=1;

  constructor(private activatedRoute: ActivatedRoute,private userServ:UserService,
    private router: Router,
    private oService:OrderService,
    private location: Location) { }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
        this.getUser();



      })

     console.log(this.user);
     console.log(this.orders);
    }

    calc(x:number|undefined , y:number|undefined){
      if(x && y){
        this.total=x+y;
        return this.total;
      }else return ''



    }

     // to get user
  getUser():void{
    let token = this.userServ.isUserSignedIn()
    if(token) this.userServ.getUserByToken(token).subscribe(res=>{
      console.log(res)
      this.user = res;
      if(this.user&&this.user.id){
        this.oService.getOrdersByCustomerId(this.user.id).subscribe(
          (res)=>{
            console.log(res)
            this.orders=res;
          }
        )
      }
    })
    else console.log('not logged in ')

  }

}

