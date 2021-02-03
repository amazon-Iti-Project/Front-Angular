import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginFrm = this.fb.group({
    Name:['',[Validators.required , Validators.pattern('[a-zA-Z]{6,15}')]],
    Email:['',[Validators.email , Validators.required]],
    Password:['',[Validators.required , Validators.pattern('[a-zA-Z0-9@*#]{8,15}')]],
    rePassword:['',[Validators.required , Validators.pattern('[a-zA-Z0-9@*#]{8,15}')]]
  });
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginFrm.value)
  }
}
