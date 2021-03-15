import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iproduct, ITranslatedProduct } from 'src/app/viewModel/IProduct';
import { environment } from 'src/environments/environment.prod';
import { UserService } from './../user/user.service';
import { LocalizationService } from './../localization/localization.service';
import { Iorder } from 'src/app/viewModel/Iorder';


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

  getProductsBySellerId(id: number): Observable<Iproduct[]> {
    let test = this.http.get<ITranslatedProduct[]>(`${environment.API_BASE_URL}/${environment.products}?seller=${id}`)
    .pipe(map(jsonList=>this.parseFromJsonToProductList(jsonList)));
    return test;
  }


  getListOfProductsById(productsId:number[]):Observable<Iproduct[]>|undefined{
    let lang: string = this.localeServ.getLanguage();
    if(productsId.length>0){
  
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

  return undefined;

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

  searchProductsByText(text : string) : Observable<Iproduct[]>{
    let lang: string = this.localeServ.getLanguage();
    return this.http.get<ITranslatedProduct[]>
    (`${environment.API_BASE_URL}/products?q=${text}`)
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

  addNewProduct(prod: Iproduct): Observable<Iproduct> {
    let parsedProd = this.parseFromJsonToProduct(prod)
    console.log("recieved Product: ", prod)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<ITranslatedProduct>(`${environment.API_BASE_URL}/${environment.products}`, parsedProd, httpOptions)
    .pipe(map(
      (product)=>
        this.parseFromJsonToProduct(product)
    ))
  }

  parseFromJsonToProduct(product:ITranslatedProduct):Iproduct{
    let lang: string = this.localeServ.getLanguage();
    let parsedProduct:Iproduct;
    if(lang == 'ar')
    parsedProduct = {...product,...product.ar}
    else 
    parsedProduct = {...product,...product.en}
    return parsedProduct
  }

  parseProductToJson(product:Iproduct):ITranslatedProduct{
    let parsedProduct:ITranslatedProduct;
    let {name,description,tags,color,size,subTitle,...restproduct} = product
    parsedProduct = {...restproduct}
    return parsedProduct
  }

  parseFromProductListToJson(brands: Iproduct[]): ITranslatedProduct[] {
    let parsedBrands = brands.map(
      (brand) => this.parseProductToJson(brand))
    return parsedBrands;
  }

  parseFromJsonToProductList(brands: ITranslatedProduct[]): Iproduct[] {
    let parsedBrands = brands.map(
      (brand) => this.parseFromJsonToProduct(brand))
    return parsedBrands;
  }



  deleteProduct(prodId: number): Observable<ITranslatedProduct> {
    let prod = this.http.delete<ITranslatedProduct>(`${environment.API_BASE_URL}/${environment.products}/${prodId}`)
    return prod
  }

  updateProductQuantityById(id:number,quantity:number):Observable<Iproduct>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    let lang: string = this.localeServ.getLanguage();
    let products = this.http.patch<ITranslatedProduct>(`${environment.API_BASE_URL}/${environment.products}/${id}`,{quantity},httpOptions,)
    .pipe(map(prod => this.parseFromJsonToProduct(prod)))
    return products;
  }

}
