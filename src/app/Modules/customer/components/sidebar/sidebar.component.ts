import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from 'src/app/services/localization/localization.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iuser } from 'src/app/viewModel/Iuser';

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
  user:Iuser|undefined
  currentUrl:string = '/'
  constructor(private localServ:LocalizationService,private router:Router,private userServ:UserService,private localizationServ:LocalizationService) { }

  ngOnInit(): void {
     // get current user
     this.getCurrentUser();
    // this.loadExternalStyles("./sidebar.component.scss").then(
    //   ()=>console.log("loaded side bar")
    // )
    this.localizationServ.selectedLanguage.subscribe(res=>
      this.lang = res
    )
    
  }
  getCurrentUser():void{
    let token = this.userServ.isUserSignedIn()
    if(token){
    console.log(token)
    this.userServ.getUserByToken(token).subscribe(res=>{
      if(res){
        this.user=res
        console.log(res)
        console.log(this.user)
      }else{
        this.userServ.logOutUser();
      }
    }
      ,err=>alert(`error in get user:${err}`))
    }
   
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

  logout(): void {
    this.closeSideBar();
    if (this.user) {
      this.userServ.deleteTokenByUserId(this.user).subscribe(res=>{
        this.userServ.logOutUser();
        this.user = undefined
        alert("signout")
        this.router.navigate(['/'])
      },err =>alert(`error:${err}`))
      
    }
  }

  changeLang(lang:string):void{
    this.closeSideBar();
    this.localServ.changeSelectedLanguage(lang);
    // console.log("event",lang)
  }
  

}
