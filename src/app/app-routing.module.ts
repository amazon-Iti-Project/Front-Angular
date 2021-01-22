import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './appComponent/home/home.component';
import { OrdersHomeComponent } from './Modules/orders/Components/orders-home/orders-home.component';
import { PackageTrackComponent } from './Modules/orders/Components/package-track/package-track.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Orders', component: OrdersHomeComponent },
  { path: 'TrackPackage', component: PackageTrackComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
