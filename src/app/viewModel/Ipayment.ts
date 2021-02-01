import { PAYMENT_STATE, PAYMENT_TYPE } from "../enums/enums";

export interface Ipayment {
    id:number
    type:PAYMENT_TYPE;
    state:PAYMENT_STATE;
    date:string;
    payment:number
}