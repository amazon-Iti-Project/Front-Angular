import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './appComponent/home/home.component';
import { NotFoundComponent } from './appComponent/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent  },
  // { path: 'aboutus', component:  },
  { path: 'category', loadChildren:()=> import('./Modules/categories/categories.module').then(module => module.CategoriesModule) },
  { path: 'seller', loadChildren:()=> import('./Modules/seller/seller.module').then(module => module.SellerModule) },
  { path: 'admin', loadChildren:()=> import('./Modules/admin/admin.module').then(module => module.AdminModule) },
  { path: 'auth', loadChildren:()=> import('./Modules/auth/auth.module').then(module => module.AuthModule) },
  // Default path 
  //, full mean not relative path match the full path
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 

  // Wildcard path;
  // to match any path that not met about
  //note if wildCard was the satrt path it will be matched every time so must be the last one
  { path: "**", component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
