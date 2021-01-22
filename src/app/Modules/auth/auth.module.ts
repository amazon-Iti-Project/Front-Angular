import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';



@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
