import { Iproduct } from './../../viewModel/IProduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory, ITranslatedCategory } from 'src/app/viewModel/Icategory';
import { environment } from 'src/environments/environment.prod';
import { LocalizationService } from './../localization/localization.service';
import { ICategoryCollection, ITranslatedCategoryCollection } from 'src/app/Modules/categories/viewModels/ICategoryCollection';
import { map } from 'rxjs/operators';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private localServ: LocalizationService) { }


  getAllCategories(): Observable<Icategory[]> {
    let test = this.http.get<Icategory[]>(`${environment.API_BASE_URL}/${environment.categories}`)
    console.log(test)
    return test;
  }

  getAllCategoryCollections(): Observable<ICategoryCollection[]> {
     let lang:string  = this.localServ.getLanguage()
    return this.http.get<ITranslatedCategoryCollection[]>(`${environment.API_BASE_URL}/categoriesCollection`)
      .pipe(
        map(
          (collectionLList) =>
            collectionLList.map(
              (collection) => {
                let collect: ICategoryCollection;
                if(lang == 'ar')
                collect = { data: this.parseFromJsonToCategoryList(collection.data), title: collection.title,parsedTitle:collection.title.ar }
                else
                collect = { data: this.parseFromJsonToCategoryList(collection.data), title: collection.title,parsedTitle:collection.title.en }

                return collect;
              }
            )
        )
      )
  }



  getCategoryById(id: number): Observable<Icategory> {
    let test = this.http.get<Icategory>(`${environment.API_BASE_URL}/${environment.categories}/${id}`)
    console.log(test)
    return test;
  }

  addNewCategory(category: Icategory): Observable<Icategory> {
    console.log("recieved Product: ", category)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Icategory>(`${environment.API_BASE_URL}/${environment.categories}`, category, httpOptions);


  }

  deleteCategory(catId: number): Observable<Icategory> {
    let cat = this.http.delete<Icategory>(`${environment.API_BASE_URL}/${environment.categories}/${catId}`)

    return cat
  }
  addToCart(prd: Iproduct) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this.http.post(`${environment.API_BASE_URL}/Cart`, prd, httpOptions);
  }

  parseFromJsonToCategoryList(brands: ITranslatedCategory[]): Icategory[] {
    let parsedBrands = brands.map(
      (brand) => this.parseFromJsonCategory(brand))
    return parsedBrands;
  }

  parseFromJsonCategory(brand: ITranslatedCategory): Icategory {
    let lang: String = this.localServ.getLanguage();
    let parsedBrand: Icategory;
    if (lang == 'ar')
      parsedBrand = { name: brand.ar.name, ...brand }
    else parsedBrand = { name: brand.en.name, ...brand }
    return parsedBrand
  }

  parseCategoryToJson(brand: Icategory): ITranslatedCategory {
    let parsedBrand: ITranslatedCategory;
    let { name, ...rest } = brand;
    parsedBrand = { ...rest }
    return parsedBrand
  }

  parseFromCategoryListToJson(brands: Icategory[]): ITranslatedCategory[] {
    let parsedBrands = brands.map(
      (brand) => this.parseCategoryToJson(brand))
    return parsedBrands;
  }

}
