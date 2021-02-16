import { TranslateConfigService } from './../../services/translate-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  // "../../../../node_modules/font-awesome/css/font-awesome.css",
]
})
export class HeaderComponent implements OnInit {

  constructor(private translateConfigService:TranslateConfigService) { }

  ngOnInit(): void {
  }

  changLang(type:string){
    this.translateConfigService.changeLanguage(type);
    console.log("Arabic");

  }
}
