import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
// import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// by abanoub
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
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
    // by abanoub to be checked
    NgbModule,
    // firebase init neeed 2 module 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    // for displaying countries
    // MatSelectCountryModule.forRoot('en'),
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
