import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryCollection } from '../viewModels/ICategoryCollection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesJSONService {

  constructor(private httpClient : HttpClient) { }
  getAllCategories() : Observable<ICategoryCollection[]>{
    return this.httpClient.get<ICategoryCollection[]>(`${environment.API_BASE_URL}/categoriesCollection`);
  }
}
