import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// by abanoub
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//For Translate
export function rootLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'assets/locale.', '.json')
}
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
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
