import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/viewModel/IProduct';
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

  getProductsByCategoryId(catId:number):Observable<Iproduct[]>{
    let products = this.http.get<Iproduct[]>(`${environment.API_BASE_URL}/${environment.products}?category=${catId}`)
    return products;
  }

  getProductsByBrandId(brandId:number):Observable<Iproduct[]>{
    let products = this.http.get<Iproduct[]>(`${environment.API_BASE_URL}/${environment.products}?brand=${brandId}`)
    return products;
  }

  getProductById(id: number): Observable<Iproduct> {
    let test = this.http.get<Iproduct>(`${environment.API_BASE_URL}/${environment.products}/${id}`)
    console.log(test)
    return test;
  }


  getListOfProductsById(productsId:number[]):Observable<Iproduct[]>{
    let query = productsId.map(id =>`id=${id}` )
    let reqQuery = query.join('&');
    let products = this.http.get<Iproduct[]>(`${environment.API_BASE_URL}/${environment.products}?${reqQuery}`)
    return products
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



  deleteProduct(prodId: number): Observable<Iproduct> {
    let prod = this.http.delete<Iproduct>(`${environment.API_BASE_URL}/${environment.products}/${prodId}`)
    return prod
  }
}
