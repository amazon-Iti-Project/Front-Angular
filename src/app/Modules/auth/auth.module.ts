import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHomeComponent } from './auth-home.component';
import { NotFoundComponent } from 'src/app/appComponent/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '' ,component: AuthHomeComponent, children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: "**", component: NotFoundComponent }
    ]
  }
]


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    AuthHomeComponent,
  ],
  imports: [
CommonModule,
RouterModule.forChild(routes),
// RouterModule
ReactiveFormsModule,
FormsModule,
TranslateModule


  ]
})
export class AuthModule { }
