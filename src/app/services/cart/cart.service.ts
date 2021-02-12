import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/viewModel/Iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getUser(userID:number):Observable<Iuser>{
    let customer = this.http.get<Iuser>(`${environment.API_BASE_URL}/users/${userID}`)
    return customer;
  }

}
