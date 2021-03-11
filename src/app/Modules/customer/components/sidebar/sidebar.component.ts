import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization/localization.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    './sidebar.component.scss',

],

})
export class SidebarComponent implements OnInit {
  @Input() isOpen:boolean = false;
  @Output() sideBarClosed:EventEmitter<boolean> = new EventEmitter<boolean>();
  lang:String|undefined

  constructor(private localizationServ:LocalizationService) { }

  ngOnInit(): void {
    // this.loadExternalStyles("./sidebar.component.scss").then(
    //   ()=>console.log("loaded side bar")
    // )
    this.localizationServ.selectedLanguage.subscribe(res=>
      this.lang = res
    )
    
  }

  closeSideBar(){
    console.log("event fired")
    this.sideBarClosed.emit(!this.isOpen)
  }

  private loadExternalStyles(styleUrl: string) {
    return new Promise((resolve, reject) => {
      console.log("loaded side bar")
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }
  

}
