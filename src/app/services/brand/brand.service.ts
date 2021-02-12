import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibrand } from 'src/app/viewModel/Ibrand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getAllBrands():Observable<Ibrand[]>{
    let test = this.http.get<Ibrand[]>(`${environment.API_BASE_URL}/${environment.brands}`)
    console.log(test)
    return test;
  }

  getBrandById(id:number):Observable<Ibrand>{
    let test = this.http.get<Ibrand>(`${environment.API_BASE_URL}/${environment.brands}/${id}`)
    console.log(test)
    return test;
  }

  addNewBrand(brand:Ibrand):Observable<Ibrand>{
    console.log("recieved Product: ",brand)
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        return this.http.post<Ibrand>(`${environment.API_BASE_URL}/${environment.brands}`,brand, httpOptions);
  }

deleteBrand(brandId:number):Observable<Ibrand>{
  let brand = this.http.delete<Ibrand>(`${environment.API_BASE_URL}/${environment.brands}/${brandId}`)
    return brand;
}
}
