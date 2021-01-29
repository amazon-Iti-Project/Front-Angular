import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestNavComponent } from './appComponent/test-nav/test-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TestNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    //font awesome Module
    // use this command to init
    //(npm install --save font-awesome angular-font-awesome)
    //  AngularFontAwesomeModule
<<<<<<< HEAD
    // to use NgModel
    FormsModule,
    //have service to use Http requests for apis 
    HttpClientModule,
    // for reactive forms
    ReactiveFormsModule,
=======
    HttpClientModule
>>>>>>> CatChangeBySal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
