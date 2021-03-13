import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { Iorder, ItranslatedOrder } from './../../viewModel/Iorder';
import { Iproduct, ITranslatedProduct } from 'src/app/viewModel/IProduct';
import { LocalizationService } from '../localization/localization.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient,private localeServ:LocalizationService) { }

  getAllOrders(): Observable<Iorder[]> {
    let test = this.http.get<ItranslatedOrder[]>(`${environment.API_BASE_URL}/${environment.orders}`)
    .pipe(map(
      (orders)=> this.parseOrdersJsonProducts(orders)
    ));
    return test;
  }

  getOrdersByCustomerId(id: number): Observable<Iorder[]> {
    let test = this.http.get<ItranslatedOrder[]>(`${environment.API_BASE_URL}/${environment.orders}?customer=${id}`)
    .pipe(map(
      (orders)=> this.parseOrdersJsonProducts(orders)
    ));
    return test;
  }


  getOrderById(id: number): Observable<Iorder> {
    let order = this.http.get<Iorder>(`${environment.API_BASE_URL}/${environment.orders}/${id}`)
    .pipe(map(
      (order)=> {
        let parsedProducts:Iproduct[] = this.parseOrderJsonProducts(order.products)
        let {products,...restOrder} = order;
        let parsedOrder:Iorder = {products:parsedProducts,...restOrder}
        return parsedOrder;
      }
    ));
    return order;
  }

  // getOrderbyCustomerId(id:number):Observable<Iorder> {
  //   let orders = this.http.get<Iorder>(`${environment.API_BASE_URL}/${environment.orders}/?customer=${id}`)
  //   .pipe(map(
  //     (order)=> {
  //       let parsedProducts:Iproduct[] = this.parseOrderJsonProducts(order.products)
  //       let {products,...restOrder} = order;
  //       let parsedOrder:Iorder = {products:parsedProducts,...restOrder}
  //       return parsedOrder;
  //     }
  //   ));
  //     console.log(orders)
  //   return orders;
  // }

  addNewOrder(order: Iorder): Observable<Iorder> {
    let parsedProducts:ITranslatedProduct[] = this.parseOrderToJsonOrder(order.products)
    let {products,...restOrder} = order;
    let parsedOrder:ItranslatedOrder = {products:parsedProducts,...restOrder}
    console.log("recieved Product: ", order)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    console.log("adding Order: ",parsedOrder)
    return this.http.post<ItranslatedOrder>(`${environment.API_BASE_URL}/${environment.orders}`, parsedOrder, httpOptions)
    .pipe(map(
      (order)=> {
        let parsedProducts:Iproduct[] = this.parseOrderJsonProducts(order.products)
        let {products,...restOrder} = order;
        let parsedOrder:Iorder = {products:parsedProducts,...restOrder}
        return parsedOrder;
      }
    ));

  }

  deleteOrder(orderId: number): Observable<Iorder> {
    let order = this.http.delete<Iorder>(`${environment.API_BASE_URL}/${environment.orders}/${orderId}`)
    .pipe(map(
      (order)=> {
        let parsedProducts:Iproduct[] = this.parseOrderJsonProducts(order.products)
        let {products,...restOrder} = order;
        let parsedOrder:Iorder = {products:parsedProducts,...restOrder}
        return parsedOrder;
      }
    ));
    return order;
  }

  parseOrdersJsonProducts(rowJsonList:ItranslatedOrder[]):Iorder[]{
    return  rowJsonList.map(
         (order)=>{
          let  parsedOrder:Iorder;
        let parsedProducts:Iproduct[]= this.parseOrderJsonProducts(order.products)
            let {products,...restOrder} = order;
            parsedOrder = {products:parsedProducts,...restOrder}
            return parsedOrder;
           
          
         }
       )
   }
 
   parseOrderJsonProducts(products:ITranslatedProduct[]):Iproduct[]{
     let lang: string = this.localeServ.getLanguage();
    return products.map(
       (product)=>{
        let  {ar,en,...prod} = product
        let parsedProduct:Iproduct;
        if(lang == 'ar')
        parsedProduct= {...prod,...ar,ar,en}
        else
        parsedProduct= {...prod,...en,ar,en}
 
        console.log(parsedProduct);
          return parsedProduct;
       });
 
   }
   parseOrderToJsonOrder(products:Iproduct[]):ITranslatedProduct[]{
 
    return products.map(
       (product)=>{
        let  {name,description,tags,color,size,subTitle,...rest} = product
        let parsedProduct:ITranslatedProduct = {...rest}
        console.log(parsedProduct);
          return parsedProduct;
       });
 
   }
}