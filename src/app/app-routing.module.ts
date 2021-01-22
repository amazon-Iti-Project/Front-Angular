import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './appComponent/home/home.component';
import { SignInComponent } from './Modules/auth/Components/sign-in/sign-in.component';
import { SignUpComponent } from './Modules/auth/Components/sign-up/sign-up.component';
import { DeliveredPackageComponent } from './Modules/orders/Components/delivered-package/delivered-package.component';
import { OrdersHomeComponent } from './Modules/orders/Components/orders-home/orders-home.component';
import { PackageTrackComponent } from './Modules/orders/Components/package-track/package-track.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Orders', component: OrdersHomeComponent },
  { path: 'TrackPackage', component: PackageTrackComponent },
  { path: 'DeliveredPackage', component:DeliveredPackageComponent},
  { path: 'SignIn', component:SignInComponent},
  { path: 'SignUp', component:SignUpComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
