import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,  } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({})

  constructor(private fb: FormBuilder,private adminServ:AdminService,private router:Router) {
   }

  ngOnInit(): void {
   
     // init login form
     this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

// on click login
  login():void{
   
    this.adminServ.getAdminByNameAndPassword(this.loginForm.value).subscribe(res=>{
      console.log('success',res)
      if(res){
      console.log('success',res)
        let token = this.adminServ.createTokenbyAdminId(res)
        this.adminServ.updateAdminToken(res,token).subscribe(res=>
          {
            console.log(res)
            this.router.navigate(['/admin/home'])
            .then(res => { console.log(res) })
            .catch(err => console.log(err))
          },err=>console.log(err))
      }else alert('Not a Admin please Register')
     
    }
     ,
    err=>console.log("failed"))
  }

  // to get Admin
  getAdmin():void{
    let token = this.adminServ.isAdminSignedIn()
    if(token) this.adminServ.getAdminByToken(token).subscribe(res=>console.log(res))
    else console.log('not logged in ')

  }
}
