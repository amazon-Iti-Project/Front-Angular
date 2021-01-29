import { DELIVERY_STATE } from "../enums/enums";

export interface Iorder{
    id:number;
    products:number[];
    customer:number;
    state:DELIVERY_STATE;
    payment:number;
    address:string;
    orderShip:number;
    orderPrice:number;
    date:string
}