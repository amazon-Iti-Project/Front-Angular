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
  ord:Iorder|null=null;
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
        if(this.user&&this.user.id){
          this.oService.getOrderbyCustomerId(this.user.id).subscribe(
            (res)=>{
              console.log(res)
              this.ord=res;
            }
          )
        }


      })

     console.log(this.user);
     console.log(this.ord);
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
    })
    else console.log('not logged in ')

  }

}

