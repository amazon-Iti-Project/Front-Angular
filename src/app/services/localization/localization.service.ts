import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(public translate: TranslateService) {}

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
      // alert(`GetLanguage ${lang}`)
      if (lang == "" || lang == null || lang == undefined) {
        return this.getDefaultLanguage();
      }
      return lang;
    }
  

    // default language
    private getDefaultLanguage() {
      return "ar";
    }
}
