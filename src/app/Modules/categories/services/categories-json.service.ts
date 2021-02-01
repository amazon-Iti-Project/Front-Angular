import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../viewModels/ICategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesJSONService {

  constructor(private httpClient : HttpClient) { }
  // getAllCategories() : Observable<ICategory[]>{
  //   return this.httpClient.get<ICategory[]>(`${environment.API_URL}/categories`);
  // }
}
