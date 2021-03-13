import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from './../../../../services/user/user.service';
import { Routes, Router } from '@angular/router';
import { forbiddenPasswordValidator, forbiddenRePasswordValidator, passwordMatch } from 'src/app/validators/password-match/password-match';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginFrm = this.fb.group({})
  constructor( private fb:FormBuilder,private userServ:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getCurrentUser();

    this.loginFrm = this.fb.group({
    // Name:['',[Validators.required , Validators.pattern('[a-zA-Z]{6,15}')]],
    name:['',[Validators.required,Validators.minLength(6) ] ],
    username:['',[Validators.email , Validators.required]],
    // Password:['',[Validators.required , Validators.pattern('[a-zA-Z0-9@*#]{8,15}')]],
    // rePassword:['',[Validators.required , Validators.pattern('[a-zA-Z0-9@*#]{8,15}')]]
    password:[''],
  });
  this.loginFrm.addControl('repassword',new FormControl(''))
  this.loginFrm.setValidators(passwordMatch)
// this.loginFrm.controls['repassword'].setValidators([Validators.required,Validators.minLength(6),forbiddenPasswordValidator(this.loginFrm.controls['Password'])])
// this.loginFrm.controls['Password'].setValidators([Validators.required,Validators.minLength(6),forbiddenRePasswordValidator(this.loginFrm.controls['repassword'])])
this.loginFrm.controls['repassword'].setValidators([Validators.required,Validators.minLength(6),])
this.loginFrm.controls['password'].setValidators([Validators.required,Validators.minLength(6),])


this.loginFrm.controls['password'].valueChanges.subscribe(res=>{
  console.log("matching", this.loginFrm.errors? this.loginFrm.errors.noMatching :false)
  console.log( this.loginFrm.invalid)
})
    
    console.log(this.loginFrm)
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


  login(){
    this.loginFrm.removeControl('repassword')
    console.log(this.loginFrm.value)

    this.userServ.addNewUser(this.loginFrm.value).subscribe(res=>{
      let token = this.userServ.createTokenbyUserId(res)
      this.userServ.updateUserToken(res,token).subscribe(res=>
        {
          console.log(res)
          this.router.navigate(['/'])
          .then(res => { console.log(res) })
          .catch(err => console.log(err))
        },err=>console.log(err))
    },err=>console.log(err))
  }
}
