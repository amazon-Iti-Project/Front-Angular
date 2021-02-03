import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../../../services/user/user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginFrm = this.fb.group({
    // Name:['',[Validators.required , Validators.pattern('[a-zA-Z]{6,15}')]],
    name:['',[Validators.required ] ],
    username:['',[Validators.email , Validators.required]],
    // Password:['',[Validators.required , Validators.pattern('[a-zA-Z0-9@*#]{8,15}')]],
    // rePassword:['',[Validators.required , Validators.pattern('[a-zA-Z0-9@*#]{8,15}')]]
    Password:['',[Validators.required  ]],
    rePassword:['',[Validators.required  ]]
  });
  constructor( private fb:FormBuilder,private userServ:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginFrm.value)
    this.userServ.addNewUser(this.loginFrm.value).subscribe(res=>{
      let token = this.userServ.createTokenbyUserId(res)
      this.userServ.updateUserToken(res,token).subscribe(res=>
        {
          console.log(res)
          this.router.navigate(['/home'])
          .then(res => { console.log(res) })
          .catch(err => console.log(err))
        },err=>console.log(err))
    },err=>console.log(err))
  }
}
