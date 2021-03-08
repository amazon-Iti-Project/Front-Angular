import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAuthComponent } from './adminComponents/admin-auth/admin-auth.component';
import { AdminHomeAuthenticatedModule } from './adminComponents/admin-home-authenticated/admin-home-authenticated.module';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundComponent } from 'src/app/appComponent/not-found/not-found.component';
console.log("admin")
const routes: Routes = [
  {
    path: '' ,component: AdminHomeComponent, children: [
      { path: 'auth', component: AdminAuthComponent },
  { path: 'home', loadChildren: () => import('./adminComponents/admin-home-authenticated/admin-home-authenticated.module')
  .then(module => AdminHomeAuthenticatedModule ),canActivate:[AdminGuard] },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: "**", component: NotFoundComponent }
    ]
  }
]

@NgModule({
  declarations: [
   
    AdminAuthComponent,
    AdminHomeComponent
  ],
  imports: [
  RouterModule.forChild(routes),
    // RouterModule
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,


  ],
  
  // exports: [RouterModule],


})
export class AdminModule { }
