import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ishipping } from 'src/app/viewModel/Ishipping';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }


  addNewShipping(shipping: Ishipping): Observable<Ishipping> {
    console.log("recieved Product: ", shipping)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Ishipping>(`${environment.API_BASE_URL}/${environment.shipping}`, shipping, httpOptions);
  }
}
