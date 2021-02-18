import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LocalizationService } from 'src/app/services/localization/localization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSideBarOpen:boolean = false;
  
  constructor(private router:Router,
    private localServ:LocalizationService,
    public translate:TranslateService
    ) { 


    this.translate.use(this.localServ.getLanguage());
  }

  ngOnInit(): void {
    
   
    
  }

  // child event
  onCheckAllBtn(e:any){
    console.log("event called")
    this.isSideBarOpen =!this.isSideBarOpen
  }
  closeSideBar(e:any){
    this.isSideBarOpen = !this.isSideBarOpen;
  }

}
