import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../viewModels/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsJsonService {

  constructor(private httpClient : HttpClient) { }
  // getProductsByCatName(catName : string) : Observable<IProduct[]>{
  //   return this.httpClient.get<IProduct[]>
  //   (`${environment.API_URL}/products?categoryName=${catName}`);
  // }
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.API_BASE_URL}/Salmaproducts`)
  }
}