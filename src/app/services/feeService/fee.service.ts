import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifee } from 'src/app/viewModel/Ifee';
import { environment } from 'src/environments/environment';
import { filter, first,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http:HttpClient) {
    
   }

   // if category exist in fees return it`s fee 
   // else return default fee that has category 0 >> refer to all categories
   getFeebyCatId(catId:number):Observable<Ifee|undefined>{
    let obs = this.http.get<Ifee[]>(`${environment.API_BASE_URL}/${environment.fees}?category=${catId}&category=0`)
    .pipe(map(res =>{ 
      let defaultFee;
      console.log(res)
      for(let fee of res){
      console.log("inside map")
      if(fee.category === catId){
        console.log("match")
        return fee
      }else if(fee.category === 0) defaultFee = fee;
       
    }
      return defaultFee;
          
  }))
    console.log(obs)
    return obs;
   }
   
}
