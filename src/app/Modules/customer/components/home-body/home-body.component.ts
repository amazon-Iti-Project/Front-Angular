import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { LocalizationService } from './../../../../services/localization/localization.service';
import{home} from 'src/app/Modules/customer/home-elements.json';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  listElements:any[] = home;
  constructor( 
    // private translateConfigService:TranslateConfigService,
    // private localServ:LocalizationService,
    // public translate:TranslateService
    ) { 
      // translate.addLangs(["en", "ar"]);
      // translate.setDefaultLang("en");
  
      // const browserLang = translate.getBrowserLang();
      // console.log("lang:",browserLang)
      // translate.use(browserLang.match(/en|ar/) ? browserLang : "en");
      
      // this.translate.use(this.localServ.getLanguage());
    }

  ngOnInit(): void {
    console.log(home);

  }

}
