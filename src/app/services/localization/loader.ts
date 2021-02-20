import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


@Injectable({
    providedIn: 'root'
  })
export class LanguageLoader {

    // factory function that load json file
  public static httpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/locale/', '.json');
  }
}