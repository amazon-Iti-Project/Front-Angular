import { DOCUMENT } from '@angular/common';
import { Component, Inject, AfterViewInit, OnInit, Injectable } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageLoader } from './services/localization/loader';
import { LocalizationService } from './services/localization/localization.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  ]
})


export class AppComponent implements OnInit, AfterViewInit {
  title = 'AmazonProject';
  constructor(
    // @Inject(DOCUMENT)private document: Document,
    private localServ: LocalizationService,
    public translate: TranslateService,
    private loader: LanguageLoader,
    private http: HttpClient,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,

  ) {
    // use local storage language or default
    this.translate.use(this.localServ.getLanguage())
    console.log("appComponent")

    // this.loader = LanguageLoader.httpLoaderFactory(http).getTranslation('ar').subscribe(console.log)
    // this.translate.getTranslation(this.localServ.getLanguage()).subscribe(res=>this.langFile=res)
    // this.translate.onLangChange.subscribe(this.changeLangage)

    this.loadStyles()
  }
  ngOnInit(): void {
    console.log("on init app component")
    this.localServ.selectedLanguage.subscribe((lang) => {
      this.changeLangage(lang);

    })
    // this.localServ.changeSelectedLanguage('ar');
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
      // require("style-loader!../assets/css/style-rtl.css")
    } else {
      console.log("else req")
      // require("style-loader!https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css");

      //  require("style-loader!../assets/bootstrap/css/bootstrap.min.css");
      //  require("style-loader!../assets/css/style-ltr.css");
    }
  }

  changeLangage(lang: string) {
    console.log("language changed")
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.changeCssFile(lang);
    //  window.location.reload();

  }

  changeCssFile(lang: String): void {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    if (lang === 'ar') {
      let bundleName = "https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css";
      // note that arrangement  differ in loading
      existingLink.type = "text/css";
      existingLink.crossOrigin = "anonymous";
      existingLink.integrity = "sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe";
      existingLink.href = bundleName;
      console.log("integrity changed")

      // right style files
      // let newLink = this.document.createElement("link");
      // newLink.rel = "stylesheet";
      // newLink.type = "text/css";
      // newLink.id = "langCss";
      // newLink.href = bundleName;
      // headTag.appendChild(newLink);

    } else {
      let bundleName = "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";
      // note that arrangement  differ in loading
      existingLink.rel = "stylesheet";
      existingLink.type = "text/css";
      existingLink.crossOrigin = "anonymous";
      existingLink.integrity = "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2";
      existingLink.href = bundleName;
      console.log("integrity changed")

    }

  
    
  }





}
