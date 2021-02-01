import { DELIVERY_STATE } from "../enums/enums";
import { Ipayment } from './Ipayment';

export interface Iorder{
    id:number;
    products:number[]; // products id
    user:number; // user id
    state:DELIVERY_STATE;
    payment:Ipayment; // paymentId >> object 
    address:string;     
    orderShip:number;   // $
    orderPrice:number;  // $
    orderPeriod:number; // biggest of products shipping
    date:string;
}


export interface IorderdProducts{
    id:number;
    productId:number;
    orderId:number;
    
}




