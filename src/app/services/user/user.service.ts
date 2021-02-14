import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/viewModel/Iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// init by npm i (guid-typescript --save) to generate an token
import { Guid } from 'guid-typescript';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addNewUser(user: Iuser): Observable<Iuser> {
    console.log("recieved Product: ", user)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Iuser>(`${environment.API_BASE_URL}/${environment.users}`, user, httpOptions);
  }

  //1-to get the user from db.json  in login page after submit
  getUserByNameAndPassword(user:Iuser):Observable<Iuser>{
    return this.http.get<Iuser[]>(`${environment.API_BASE_URL}/${environment.users}?username=${user.username}&password=${user.password}`)
    .pipe(map(users=> users[0] ))
  }

  getUserById(user:Iuser):Observable<Iuser>{
    return this.http.get<Iuser>(`${environment.API_BASE_URL}/${environment.users}/${user.id}`)
    
  }

  //2- if a user create a token in local storage
  createTokenbyUserId(user:Iuser):string{
    let token: string = Guid.create().toString();
    console.log("this is user and that is token: ", token)

    localStorage.setItem('UserToken', token);
    return token
  }

  //3- add token to user in db 
  updateUserToken(user:Iuser,token:string):Observable<Iuser>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
     return this.http.patch<Iuser>(`${environment.API_BASE_URL}/${environment.users}/${user.id}`,{ token }, httpOptions)

  }

  //4- to get user token //1- in any page to get current user use this method first
  isUserSignedIn(): string|undefined {
    let token = localStorage.getItem('UserToken')
    if (token) {
      return token ;
    }
    else {
      return undefined;
    }
  }

//5- if user get user by token  // 2- in any page if user logged use this method
  getUserByToken(token:string):Observable<Iuser>{
    return this.http.get<Iuser[]>(`${environment.API_BASE_URL}/${environment.users}?token=${token}`)
    .pipe(map(users=> users[0] ))
  }

  // add to cart 
  // steps to add to cart
  // 1- get the user and on click add to cart send user and productId tp addTpCart method
  addToCart(user:Iuser,productId:number):Observable<Iuser>{
    user.cart?.push(productId)
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    return this.http.patch<Iuser>(`${environment.API_BASE_URL}/${environment.users}/${user.id}`,{ cart:user.cart }, httpOptions)

  }

  getUserCart(user: Iuser): Observable<number[]> {
    return this.http.get<Iuser>(`${environment.API_BASE_URL}/${environment.users}/${user.id}`)
      .pipe(map(user => user.cart ? user.cart : []))

  }

  

  
 
  
  // this.getUserByToken(token).subscribe( res=>{
  // },err =>console.log(err))

  // in log out remove user token 
    deleteTokenByUserId(user:Iuser):Observable<Iuser>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
     return this.http.patch<Iuser[]>(`${environment.API_BASE_URL}/${environment.users}/${user.id}`,{ token: null }, httpOptions)
        .pipe(map(users => users[0]))
  }

  // reomve from local storage
  logOutUser(){
    localStorage.removeItem('UserToken');
  }
}
