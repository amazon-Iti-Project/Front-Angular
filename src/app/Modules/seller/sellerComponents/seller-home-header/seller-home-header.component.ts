import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization/localization.service';

@Component({
  selector: 'app-seller-home-header',
  templateUrl: './seller-home-header.component.html',
  styleUrls: ['./seller-home-header.component.scss']
})
export class SellerHomeHeaderComponent implements OnInit {
lang:string
  constructor(private localServ:LocalizationService) { }

  ngOnInit(): void {
    this.lang = this.localServ.getLanguage()

  }

  changeLang(lang:string):void{
    this.localServ.changeSelectedLanguage(lang);
    // console.log("event",lang)
  }

}
