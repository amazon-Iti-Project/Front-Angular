import { DOCUMENT } from '@angular/common';
import { Component, Inject, AfterViewInit, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageLoader } from './services/localization/loader';
import { LocalizationService } from './services/localization/localization.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  // '../assets/bootstrap/css/bootstrap.min.css',
  // '../assets/css/style-rtl.css',
  // '../assets/bootstrap/css/bootstrap.rtl.css'
  ]
})


export class AppComponent implements OnInit ,AfterViewInit {
  title = 'AmazonProject';
  constructor(
    private localServ: LocalizationService,
    public translate: TranslateService,
    // @Inject(DOCUMENT) private document: Document,
    private loader: LanguageLoader,
    private http:HttpClient
  )
  {
    // use local storage language or default
    this.translate.use(this.localServ.getLanguage())
    console.log("appComponent")
    
    // this.loader = LanguageLoader.httpLoaderFactory(http).getTranslation('ar').subscribe(console.log)
    // this.translate.getTranslation(this.localServ.getLanguage()).subscribe(res=>this.langFile=res)
    this.translate.onLangChange.subscribe( console.log )
     
      this.loadStyles()
  }
  ngOnInit(): void {
    console.log("on init app component")
    this.localServ.selectedLanguage.subscribe(console.log)
    this.localServ.changeSelectedLanguage('ar');
  }
  ngAfterViewInit(): void {
    console.log("after appComp view init")
  }

  loadStyles() {
    // let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
// htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
let lang: string = this.localServ.getLanguage();
if (lang == 'ar') {
  console.log("require")
  // require("style-loader!../assets/css/bootstrap.min.css");
  //  require("style-loader!../assets/bootstrap/css/bootstrap.rtl.css");
  //  require("style-loader!../assets/css/style-rtl.css");
} else {
  console.log("else req")
  // require("style-loader!https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css");

  //  require("style-loader!../assets/bootstrap/css/bootstrap.min.css");
  //  require("style-loader!../assets/css/style-ltr.css");
}
}


  
}
