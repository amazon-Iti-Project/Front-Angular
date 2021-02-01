import { DELIVERY_STATE } from "../enums/enums";
import { Iproduct } from "./Iproduct";

export interface Iorder{
    id:number;
    products:Iproduct[];
    customer:number;
    status:DELIVERY_STATE;
    payment:number;
    address:string;
    orderShip:number;
    orderPrice:number;

    dueDate:string
    orderDate: string;
    deliveredDate? : string;
    canCancelledUntil: string;
}