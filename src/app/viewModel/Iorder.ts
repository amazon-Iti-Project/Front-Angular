import { DELIVERY_STATE } from "../enums/enums";

export interface Iorder{
    id:number;
    products:number[]; // products id
    customer:number; // customer id
    state:DELIVERY_STATE;
    payment:number; // paymentId
    address:string;
    orderShip:number;   // $
    orderPrice:number;  // $
    date:string
}