import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { OrdersHomeComponent } from './Components/orders-home/orders-home.component';
import { PackageTrackComponent } from './Components/package-track/package-track.component';
import { OrderNavBarComponent } from './Components/order-nav-bar/order-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from 'src/app/appComponent/home/home.component';
import { HeaderComponent } from 'src/app/appComponent/header/header.component';
import { FooterComponent } from 'src/app/appComponent/footer/footer.component';
import { CarouselComponent } from 'src/app/appComponent/carousel/carousel.component';
import { SidebarComponent } from 'src/app/appComponent/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    OrdersHomeComponent,
    PackageTrackComponent,
    OrderNavBarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule
  ]
})
export class OrdersModule { }