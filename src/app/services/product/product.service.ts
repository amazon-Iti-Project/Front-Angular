import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iproduct, ITranslatedProduct } from 'src/app/viewModel/IProduct';
import { environment } from 'src/environments/environment.prod';
import { UserService } from './../user/user.service';
import { LocalizationService } from './../localization/localization.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private localeServ:LocalizationService) { }

  getAllProducts(): Observable<Iproduct[]> {
    let lang: string = this.localeServ.getLanguage();
    let test = this.http.get<ITranslatedProduct[]>(`${environment.API_BASE_URL}/${environment.products}`)
    .pipe(map(
      (products)=> products.map(
        (product)=>{
         let  {ar,en,...prod} = product;
          let parsedProduct:Iproduct;
          if(lang == 'ar')
          parsedProduct= {...prod,...ar,ar,en}
          else
          parsedProduct= {...prod,...en,ar,en}
          console.log(parsedProduct);
            return parsedProduct;
        }
      )
    ));
    console.log(test)
    return test;
  }

  getProductsByCategoryId(catId:number):Observable<Iproduct[]>{
    let lang: string = this.localeServ.getLanguage();
    let products = this.http.get<ITranslatedProduct[]>(`${environment.API_BASE_URL}/${environment.products}?category=${catId}`)
    .pipe(map(
      (products)=> products.map(
        (product)=>{
         let  {ar,en,...prod} = product;
          let parsedProduct:Iproduct;
          if(lang == 'ar')
          parsedProduct= {...prod,...ar,ar,en}
          else
          parsedProduct= {...prod,...en,ar,en}
          console.log(parsedProduct);
            return parsedProduct;
        }
      )
    ));
    return products;
  }

  getProductsByBrandId(brandId:number):Observable<Iproduct[]>{
    let lang: string = this.localeServ.getLanguage();

    let products = this.http.get<ITranslatedProduct[]>(`${environment.API_BASE_URL}/${environment.products}?brand=${brandId}`)
    .pipe(map(
      (products)=> products.map(
        (product)=>{
         let  {ar,en,...prod} = product;
          let parsedProduct:Iproduct;
          if(lang == 'ar')
          parsedProduct= {...prod,...ar,ar,en}
          else
          parsedProduct= {...prod,...en,ar,en}
          console.log(parsedProduct);
            return parsedProduct;
        }
      )
    ));

    return products;
  }

  getProductById(id: number): Observable<Iproduct> {
    let lang: string = this.localeServ.getLanguage();

    let test = this.http.get<ITranslatedProduct>(`${environment.API_BASE_URL}/${environment.products}/${id}`)
    .pipe(map(
        (product)=>{
         let  {ar,en,...prod} = product;
          let parsedProduct:Iproduct;
          if(lang == 'ar')
          parsedProduct= {...prod,...ar,ar,en}
          else
          parsedProduct= {...prod,...en,ar,en}
          console.log(parsedProduct);
            return parsedProduct;
        }
    ));
    console.log(test)
    return test;
  }


  getListOfProductsById(productsId:number[]):Observable<Iproduct[]>{
    let lang: string = this.localeServ.getLanguage();

    let query = productsId.map(id =>`id=${id}` )
    let reqQuery = query.join('&');
    let products = this.http.get<ITranslatedProduct[]>(`${environment.API_BASE_URL}/${environment.products}?${reqQuery}`)
    .pipe(map(
      (products)=> products.map(
        (product)=>{
         let  {ar,en,...prod} = product;
          let parsedProduct:Iproduct;
          if(lang == 'ar')
          parsedProduct= {...prod,...ar,ar,en}
          else
          parsedProduct= {...prod,...en,ar,en}
          console.log(parsedProduct);
            return parsedProduct;
        }
      )
    ));
    return products
  }

  // for salma
  getProductsByCatName(catName : string) : Observable<Iproduct[]>{
    let lang: string = this.localeServ.getLanguage();
    return this.http.get<ITranslatedProduct[]>
    (`${environment.API_BASE_URL}/products?categoryName=${catName}`)
    .pipe(map(
      (products)=> products.map(
        (product)=>{
         let  {ar,en,...prod} = product;
          let parsedProduct:Iproduct;
          if(lang == 'ar')
          parsedProduct= {...prod,...ar,ar,en}
          else
          parsedProduct= {...prod,...en,ar,en}
          console.log(parsedProduct);
            return parsedProduct;
        }
      )
    ));
  }

  addNewProduct(prod: ITranslatedProduct): Observable<ITranslatedProduct> {
    console.log("recieved Product: ", prod)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<ITranslatedProduct>(`${environment.API_BASE_URL}/${environment.products}`, prod, httpOptions);
  }



  deleteProduct(prodId: number): Observable<ITranslatedProduct> {
    let prod = this.http.delete<ITranslatedProduct>(`${environment.API_BASE_URL}/${environment.products}/${prodId}`)
    return prod
  }
}
