import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization/localization.service';
import { ProductService } from 'src/app/services/product/product.service';
import { AdminCategoryService } from './../admin-categories/admin-category.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  lang:string;

  constructor(private localServ:LocalizationService,private productServ:ProductService,) { }

  ngOnInit(): void {
    this.lang = this.localServ.getLanguage()
    
  }

  // on click product link
getProducts():void {
  console.log("click")
  

}
changeLang(lang:string):void{
  this.localServ.changeSelectedLanguageAdmin(lang);
  // console.log("event",lang)
}


}
