import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Iuser } from 'src/app/viewModel/Iuser';
import { NavigationStart, Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { $ } from 'protractor';
import { LocalizationService } from './../../../../services/localization/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  // "../../../../node_modules/font-awesome/css/font-awesome.css",
]
})


export class HeaderComponent implements OnInit {
  @Output() allBtnChecked:EventEmitter<boolean> = new EventEmitter<boolean>();
  user:Iuser|undefined
  currentUrl:string = '/'
  lang:String|undefined;
  constructor(private userServ:UserService,private router:Router,private localServ:LocalizationService) {
 
   }
  
  ngOnInit(): void {
    this.lang = this.localServ.getLanguage()
    console.log("onInit home header")
        // get current user
        this.getCurrentUser();
    // check url for logout reload
    this.user?.cart.length

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

  sendEventToHome():void{
    console.log("event fired")
    this.allBtnChecked.emit()

  }
 

  logout(): void {
    if (this.user) {
      this.userServ.deleteTokenByUserId(this.user).subscribe(res=>{
        this.userServ.logOutUser();
        this.user = undefined
        alert("signout")
        this.router.navigate(['/'])
      },err =>alert(`error:${err}`))
      
    }
  }

  reloadOnCheckOut() {
    console.log(" home url: ",this.router.url)
    // this.currentUrl = this.router.url
   let navStart = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart))as Observable<NavigationStart>;
      navStart.subscribe(evt =>{
        console.log('Navigation Started!: ',evt.url)
        console.log(this.currentUrl," ,is current")
        // console.log('router url: ',this.router.url)
        console.log(this.currentUrl ==  evt.url ," ,equality")

        if(this.currentUrl ==  evt.url){
          console.log("reloading")
          console.log(this.user)
          this.ngOnInit();
        }
        
      } );
  }
  onChangeLang(e:Event,el:HTMLElement){
    // $('asd')
      console.log(e)
      console.log(el.getAttribute("data-offset"))

      const source =fromEvent(el, 'show.bs.tab')
      .subscribe((e) => console.log(e));
      

  }

  changeLang(lang:string):void{
    this.localServ.changeSelectedLanguage(lang);
    // console.log("event",lang)
  }
 

}
