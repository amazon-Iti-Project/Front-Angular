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
import { TestNavComponent } from './appComponent/test-nav/test-nav.component';
import { HomeBodyComponent } from './appComponent/home-body/home-body.component';
import { NotFoundComponent } from './appComponent/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SidebarComponent,
    HomeComponent,
    TestNavComponent,
    HomeBodyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    //font awesome Module
    // use this command to init
    //(npm install --save font-awesome angular-font-awesome)
    //  AngularFontAwesomeModule
    // to use NgModel
    FormsModule,
    //have service to use Http requests for apis 
    HttpClientModule,
    // for reactive forms
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
