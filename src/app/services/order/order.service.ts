import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iorder } from './../../viewModel/Iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getAllOrders(): Observable<Iorder[]> {
    let test = this.http.get<Iorder[]>(`${environment.API_BASE_URL}/${environment.orders}`)
    console.log(test)
    return test;
  }

  getOrderById(id: number): Observable<Iorder> {
    let test = this.http.get<Iorder>(`${environment.API_BASE_URL}/${environment.orders}/${id}`)
    console.log(test)
    return test;
  }

  addNewOrder(order: Iorder): Observable<Iorder> {
    console.log("recieved Product: ", order)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Iorder>(`${environment.API_BASE_URL}/${environment.orders}`, order, httpOptions);
  }

  deleteProduct(orderId: number): Observable<Iorder> {
    let order = this.http.delete<Iorder>(`${environment.API_BASE_URL}/${environment.orders}/${orderId}`)
    return order
  }
}