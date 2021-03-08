import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iadmin } from 'src/app/viewModel/Iadmin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// init by npm i (guid-typescript --save) to generate an token
import { Guid } from 'guid-typescript';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  addNewAdmin(admin: Iadmin): Observable<Iadmin> {
    console.log("recieved Product: ", admin)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Iadmin>(`${environment.API_BASE_URL}/${environment.admins}`, admin, httpOptions);
  }

  //1-to get the Admin from db.json  in login page after submit
  getAdminByNameAndPassword(admin:Iadmin):Observable<Iadmin>{
    return this.http.get<Iadmin[]>(`${environment.API_BASE_URL}/${environment.admins}?username=${admin.username}&password=${admin.password}`)
    .pipe(map(admin=> admin[0] ))
  }

  getAdminById(admin:Iadmin):Observable<Iadmin>{
    return this.http.get<Iadmin>(`${environment.API_BASE_URL}/${environment.admins}/${admin.id}`)
    
  }

  //2- if a Admin create a token in local storage
  createTokenbyAdminId(admin:Iadmin):string{
    let token: string = Guid.create().toString();
    console.log("this is Admin and that is token: ", token)

    localStorage.setItem('adminToken', token);
    return token
  }

  //3- add token to Admin in db 
  updateAdminToken(admin:Iadmin,token:string):Observable<Iadmin>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
     return this.http.patch<Iadmin>(`${environment.API_BASE_URL}/${environment.admins}/${admin.id}`,{ token }, httpOptions)

  }

  //4- to get Admin token //1- in any page to get current Admin use this method first
  isAdminSignedIn(): string|undefined {
    let token = localStorage.getItem('adminToken')
    if (token) {
      return token ;
    }
    else {
      return undefined;
    }
  }

//5- if Admin get Admin by token  // 2- in any page if Admin logged use this method
  getAdminByToken(token:string):Observable<Iadmin>{
    return this.http.get<Iadmin[]>(`${environment.API_BASE_URL}/${environment.admins}?token=${token}`)
    .pipe(map(admin=> admin[0] ))
  }

  

  
 
  
  // this.getAdminByToken(token).subscribe( res=>{
  // },err =>console.log(err))

  // in log out remove Admin token 
    deleteTokenByAdminId(admin:Iadmin):Observable<Iadmin>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
     return this.http.patch<Iadmin[]>(`${environment.API_BASE_URL}/${environment.admins}/${admin.id}`,{ token: null }, httpOptions)
        .pipe(map(admin => admin[0]))
  }

  // reomve from local storage
  logOutAdmin(){
    localStorage.removeItem('adminToken');
  }
}
