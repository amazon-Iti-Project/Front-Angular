import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibrand, ITranslatedBrand } from 'src/app/viewModel/Ibrand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { LocalizationService } from 'src/app/services/localization/localization.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient,private localServ:LocalizationService) { }

  getAllBrands():Observable<Ibrand[]>{
    let test = this.http.get<Ibrand[]>(`${environment.API_BASE_URL}/${environment.brands}`)
    console.log(test)
    return test;
  }
  parseFromJsonToBrandList(brands:ITranslatedBrand[]):Ibrand[]{
    let parsedBrands =  brands.map(
      (brand)=>this.parseFromJsonBrand(brand))
    return parsedBrands;
  }

  parseFromJsonBrand(brand:ITranslatedBrand):Ibrand{
    let lang:String = this.localServ.getLanguage();
    let parsedBrand:Ibrand;
    if(lang ==  'ar')
    parsedBrand = {name:brand.ar.name,...brand}
    else  parsedBrand = {name:brand.en.name,...brand}
    return parsedBrand
  }

  parseBrandToJson(brand:Ibrand):ITranslatedBrand{
    let parsedBrand:ITranslatedBrand;
    let {name,...rest}  = brand;
    parsedBrand = {...rest}
    return parsedBrand
  }

  parseFromBrandListToJson(brands:Ibrand[]):ITranslatedBrand[]{
    let parsedBrands =  brands.map(
      (brand)=>this.parseBrandToJson(brand))
    return parsedBrands;
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
