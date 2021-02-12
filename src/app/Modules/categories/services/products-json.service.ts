import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsJsonService {

  constructor(private httpClient : HttpClient) { }
  getProductsByCatName(catName : string) : Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>
    (`${environment.API_BASE_URL}/products?categoryName=${catName}`);
  }
  // getAllProducts(): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(`${environment.API_BASE_URL}/Salmaproducts`)
  // }
}