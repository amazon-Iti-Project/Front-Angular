import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AdminService } from './../../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-home-authenticated',
  templateUrl: './admin-home-authenticated.component.html',
  styleUrls: ['./admin-home-authenticated.component.scss']
})
export class AdminHomeAuthenticatedComponent implements OnInit ,OnDestroy{
  currentUrl:string =''
  constructor(private router:Router,
    private adminServ:AdminService
    ) { }
  ngOnDestroy(): void {
    console.log("on destroy admin")
    this.adminServ.logOutAdmin()
  }

  ngOnInit(): void {
    console.log("admin home",this.router.url)
    this.currentUrl = this.router.url;
   let navStart = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart))as Observable<NavigationStart>;
      navStart.subscribe(evt =>{
        console.log('Navigation Started!',evt.url)
        this.currentUrl = evt.url
        console.log(this.currentUrl);
      } );
      window.onbeforeunload = () => this.ngOnDestroy();

      
  }

}
