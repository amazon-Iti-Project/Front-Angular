import { DELIVERY_STATE } from "../enums/enums";
import { Ipayment } from './Ipayment';
import { Iproduct, ITranslatedProduct } from 'src/app/viewModel/IProduct';

export interface Iorder{
    id:number;
    products:Iproduct[]; // products id
    user:number; // user id
    status:DELIVERY_STATE;
    payment:Ipayment; // paymentId >> object
    address:string;
    orderShip:number;   // $
    orderPrice:number;
    // orderPeriod:number; // biggest of products shipping
    // date:string;

    // abanoub
    dueDate:string // duration expected for delivery // biggest of products shipping
    orderDate: string; // date of order created
    deliveredDate? : string; // date of delivery
    canCancelledUntil: string; // date that could order be cancelled
}

export interface ItranslatedOrder{
    id:number;
    products:ITranslatedProduct[]; // products id
    user:number; // user id
    status:DELIVERY_STATE;
    payment:Ipayment; // paymentId >> object
    address:string;
    orderShip:number;   // $
    orderPrice:number;
    // orderPeriod:number; // biggest of products shipping
    // date:string;
    
    // abanoub
    dueDate:string // duration expected for delivery // biggest of products shipping
    orderDate: string; // date of order created
    deliveredDate? : string; // date of delivery
    canCancelledUntil: string; // date that could order be cancelled
}


// could be used later
export interface IorderdProducts{
    id:number;
    productId:number;
    orderId:number;

}

