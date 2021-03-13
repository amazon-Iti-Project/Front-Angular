import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/viewModel/Iuser';
import { UserService } from './../../../../services/user/user.service';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({})

  constructor(private fb: FormBuilder,private userServ:UserService,private router:Router) {
   }

  ngOnInit(): void {
    this.getCurrentUser();
     // init login form
     this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  getCurrentUser():void{
    let token = this.userServ.isUserSignedIn()
    if(token){
    console.log(token)
    this.userServ.getUserByToken(token).subscribe(res=>{
      if(res){
        alert("you already logged in")
        this.router.navigate(['/'])
      }else{
        this.userServ.logOutUser();
      }
    }
      ,err=>alert(`error in get user:${err}`))
    }
   
  }

// on click login
  login():void{
   
    this.userServ.getUserByNameAndPassword(this.loginForm.value).subscribe(res=>{
      console.log('success',res)
      if(res){
      console.log('success',res)
      let token:string;
      if(res.token  == null){
        token= this.userServ.createTokenbyUserId(res)
        this.userServ.updateUserToken(res,token).subscribe(res=>
          {
            console.log(res)
            this.router.navigate(['/'])
            .then(res => { console.log(res) })
            .catch(err => console.log(err))
          },err=>console.log(err))
      }else {
        token = this.userServ.SetToken(res.token)
        this.router.navigate(['/'])
      }
       


      }else alert('Not a user please Register')
     
    }
     ,
    err=>console.log("failed"))
  }

  // to get user
  getUser():void{
    let token = this.userServ.isUserSignedIn()
    if(token) this.userServ.getUserByToken(token).subscribe(res=>console.log(res))
    else console.log('not logged in ')

  }

  
  

}
