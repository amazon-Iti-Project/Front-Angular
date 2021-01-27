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
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
     //font awesome Module
     // use this command to init
     //(npm install --save font-awesome angular-font-awesome)
    //  AngularFontAwesomeModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
