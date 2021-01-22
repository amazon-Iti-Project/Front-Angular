import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './appComponent/header/header.component';
import { FooterComponent } from './appComponent/footer/footer.component';
import { CarouselComponent } from './appComponent/carousel/carousel.component';
import { SidebarComponent } from './appComponent/sidebar/sidebar.component';
import { HomeComponent } from './appComponent/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { OrderNavBarComponent } from './Modules/orders/Components/order-nav-bar/order-nav-bar.component';
import { OrdersHomeComponent } from './Modules/orders/Components/orders-home/orders-home.component';
import { PackageTrackComponent } from './Modules/orders/Components/package-track/package-track.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SidebarComponent,
    HomeComponent,
    OrderNavBarComponent,
    OrdersHomeComponent,
    PackageTrackComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule
     //font awesome Module
     // use this command to init
     //(npm install --save font-awesome angular-font-awesome)
    //  AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
