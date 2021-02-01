import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { Iorder } from 'src/app/viewModel/Iorder';

@Component({
  selector: 'app-delivered-package',
  templateUrl: './delivered-package.component.html',
  styleUrls: ['./delivered-package.component.scss']
})
export class DeliveredPackageComponent implements OnInit {

  order = { } as Iorder;

  private subscriptionList: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,private ordService: OrderService) { }

  ngOnInit(): void {
    let routeParamSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params) => {
      let prdIDParam: string | null = params.get('oID');
      const ordID = prdIDParam ? parseInt(prdIDParam) : 0; // Get Id

      let prdSubscription: Subscription = this.ordService.getOrderById(ordID).subscribe((res) => {
        this.order = res;
      }, (err) => { console.log(err) });

      this.subscriptionList.push(prdSubscription);

    },
      (err) => { console.log(err) }
    );
    this.subscriptionList.push(routeParamSubscription);
  }

}