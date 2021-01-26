import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/viewModel/Icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList:Icategory[]=[];
  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Icategory[]>{
    let test = this.http.get<Icategory[]>(`${environment.API_BASE_URL}/${environment.categories}`)
    console.log(test)
    return test;
  }

  getCategoryById(id:number):Observable<Icategory>{
    let test = this.http.get<Icategory>(`${environment.API_BASE_URL}/${environment.categories}/${id}`)
    console.log(test)
    return test;
  }

  addNewCategory(category:Icategory):Observable<Icategory>{
    console.log("recieved Product: ",category)
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        return this.http.post<Icategory>(`${environment.API_BASE_URL}/${environment.categories}`,category, httpOptions);
  }

deleteCategory(catId:number):Observable<Icategory>{
  let cat = this.http.delete<Icategory>(`${environment.API_BASE_URL}/${environment.categories}/${catId}`)
    return cat
}
}
