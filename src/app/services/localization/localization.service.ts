import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private langDataSubject:BehaviorSubject<string> = new BehaviorSubject(this.getLanguage());
  // to can subscribe to the selected language
  selectedLanguage:Observable<string> = this.langDataSubject.asObservable();

  constructor(public translate: TranslateService) {}

// to change selected language 
  changeSelectedLanguage(selectedLang: string):void {
    this.langDataSubject.next(selectedLang)
    // to set in local storage and use this language
    this.setLanguage(selectedLang);
  }

    setLanguage(lang: string) {
      // alert("set"+lang);
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      localStorage.setItem("lang", lang.toLowerCase());
    }
  
    hasLanguage():boolean {
      let lang =localStorage.getItem("lang");
      let condition
      if(lang){
         condition = lang.length
      }
      
      return condition?true:false
    }
  

    // get user language
    getLanguage() {
      let lang: string|null|undefined = localStorage.getItem("lang");
      console.log(lang)
      // alert(`GetLanguage ${lang}`)
      if (lang == "ar"){
        return lang;
      }
      return this.getDefaultLanguage();
    }
  

    // default language
    private getDefaultLanguage() {
      return "en";
    }

}
