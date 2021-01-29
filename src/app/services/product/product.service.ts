import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/viewModel/Iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Iproduct[]> {
    let test = this.http.get<Iproduct[]>(`${environment.API_BASE_URL}/${environment.products}`)
    console.log(test)
    return test;
  }

  getProductById(id: number): Observable<Iproduct> {
    let test = this.http.get<Iproduct>(`${environment.API_BASE_URL}/${environment.products}/${id}`)
    console.log(test)
    return test;
  }

  addNewProduct(prod: Iproduct): Observable<Iproduct> {
    console.log("recieved Product: ", prod)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Iproduct>(`${environment.API_BASE_URL}/${environment.products}`, prod, httpOptions);
  }

  deleteProduct(catId: number): Observable<Iproduct> {
    let prod = this.http.delete<Iproduct>(`${environment.API_BASE_URL}/${environment.products}/${catId}`)
    return prod
  }
}
