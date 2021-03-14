import { Component, OnInit, AfterViewInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'
import {
  PayPalScriptService, IPayPalConfig, ICreateOrderRequest, IOnApproveCallbackData, IClientAuthorizeCallbackData, ICancelCallbackData, IOnClickCallbackActions
} from 'ngx-paypal';

interface Idata {
  fundingSource: string;
  currency: string;
  quantity: number;
  category: string;
  price: number
}



@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent implements OnInit, AfterViewInit {
  // @ViewChild('paypalRef',{static:true})private paypalRef:ElementRef;
  public payPalConfig: any;
  public showPaypalButtons: boolean = true;
  constructor() {


  }
  ngAfterViewInit(): void {
    // render({
    //   id:"#myPaypalBtn",
    //   currency:"USED",
    //   value:"150",
    //   onApprove:(details)=>{
    //     console.log("success payment")
    //     alert("transaction successful")
    //   },

    // })
  }

  ngOnInit() {
    // window.paypal.Buttons(
    //   {
    //     style:{
    //       layout:'horizontal'
    //     }
    //   }
    // ).render(this.paypalRef.nativeElement)

    // let mydata: Idata = {
    //   fundingSource: "kamal fundtion",
    //   currency: "eur",
    //   quantity: 5,
    //   category: "kamal category",
    //   price: 200
    // }
    this.initPaypalConfig();

  }

  pay() {
    this.showPaypalButtons = true;
  }

  back() {
    this.showPaypalButtons = false;
  }

  initPaypalConfig(): void {
    //       Sandbox account
    // sb-nme335395805@personal.example.com

    this.payPalConfig = {
      currency: "EUR",
      clientId:
      "AVfSvOu-WRXXOWdiVVQVj-125HGxFluXv1ZV2Q0QGt6_nzI3AYU-ZbXwMN9Qr-xOWcd78u_Cdyh3aSnu",
        // "AYvU7p49APJ3TWCP7EPq6Z1Sm7LijDirPdDI-G6DjNasJ2tyIVCwb0IZL1v5cKy_tw7qPr_2ybS62gCR",
      createOrder: (data:any) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: "9.99",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data:any, actions:any) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then((details:any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data:any) => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
      },
      onCancel: (data:any, actions:any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err:any) => {
        console.log("OnError", err);
      },
      onClick: (data:any, actions:any) => {
        console.log("onClick", data, actions);
      }
    };
  }
}