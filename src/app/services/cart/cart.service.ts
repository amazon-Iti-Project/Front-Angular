import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISelectedItem } from 'src/app/Modules/orders/cart/cart.component';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalCartPrice:number=0;
  selectedItems:ISelectedItem[]=[];

  constructor(private http:HttpClient) { }
  getUser(userID:number):Observable<Iuser>{
    let customer = this.http.get<Iuser>(`${environment.API_BASE_URL}/users/${userID}`)
    return customer;
  }
  getTotalPrice(cartProducts : ISelectedItem[]) : number{
    let total = 0;
    cartProducts.forEach(prod =>{
      total += (prod.product.price*prod.orderCount)
    } );
    this.totalCartPrice = total

    return total;
  }

  updateUserCart(user:Iuser,cart:number[]):Observable<Iuser>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.patch<Iuser>(`${environment.API_BASE_URL}/${environment.users}/${user.id}`,{ cart }, httpOptions)
  }

}
