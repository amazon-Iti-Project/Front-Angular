import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageLoader } from './services/localization/loader';
import { LocalizationService } from './services/localization/localization.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  ]
})


export class AppComponent {
  title = 'AmazonProject';
  langFile:any
  
  constructor(
    private localServ: LocalizationService,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private loader: LanguageLoader,
    private http:HttpClient
  ) {
    this.translate.use(this.localServ.getLanguage())
    this.changeLangage(this.localServ.getLanguage());
    console.log("appComponent")
    // this.loader = LanguageLoader.httpLoaderFactory(http).getTranslation('ar').subscribe(console.log)
    this.translate.getTranslation(this.localServ.getLanguage()).subscribe(res=>this.langFile=res)
  }

  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    // htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
  }
}
