import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './appComponent/not-found/not-found.component';
import { ShippingFormComponent } from './Modules/orders/shipping-form/shipping-form.component';
import { UserGuard } from 'src/app/guards/user.guard';

const routes: Routes = [
  { path: 'shippingDetails', component:ShippingFormComponent,canActivate:[UserGuard]},
  { path: 'seller', loadChildren: () => import('./Modules/seller/seller.module').then(module => module.SellerModule),canActivate:[UserGuard]  },
  { path: 'admin', loadChildren: () => import('./Modules/admin/admin-app.module').then(module => module.AdminModule), },
  { path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then(module => module.AuthModule) },
  { path: '', loadChildren: () => import('./Modules/customer/customer.module').then(module => module.CustomerModule)  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: "**", component:NotFoundComponent  }
  
  // Default path 
  //, full mean not relative path match the full path
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, 

  // Wildcard path;
  // to match any path that not met about
  //note if wildCard was the satrt path it will be matched every time so must be the last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
