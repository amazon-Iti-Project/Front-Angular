import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './appComponent/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent  },
  // { path: 'aboutus', component:  },
  { path: 'sell', loadChildren:()=> import('./Modules/seller/seller.module').then(module => module.SellerModule) },
  { path: 'admin', loadChildren:()=> import('./Modules/admin/admin.module').then(module => module.AdminModule) },
  { path: 'auth', loadChildren:()=> import('./Modules/auth/auth.module').then(module => module.AuthModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
