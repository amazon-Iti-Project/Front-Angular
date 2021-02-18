import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




// translate loader and translate module
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// 
import { HttpClient } from '@angular/common/http';
// translate http loader for  json files
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizationService } from '../services/localization/localization.service';
// factory function that load json file
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/locale/', '.json');
}

console.log("child shared:")


@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      isolate: true,
    }) 
  ],
  exports:[
    TranslateModule,
  ]
})
export class SharedModule {
constructor(private translate: TranslateService,private localizationService:LocalizationService){
  this.translate.use(localizationService.getLanguage());
  
}

 }
