import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipayment } from './../../viewModel/Ipayment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }



getPaymentById(id: number): Observable<Ipayment> {
  let obs = this.http.get<Ipayment>(`${environment.API_BASE_URL}/${environment.payment}/${id}`)
  console.log(obs)
  return obs;
}

addNewPayment(payment: Ipayment): Observable<Ipayment> {
  console.log("recieved payment: ", payment)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
    })
  };
  return this.http.post<Ipayment>(`${environment.API_BASE_URL}/${environment.payment}`, payment, httpOptions);
}

deletePayment(payId: number): Observable<Ipayment> {
  let prod = this.http.delete<Ipayment>(`${environment.API_BASE_URL}/${environment.payment}/${payId}`)
  return prod
}
}


