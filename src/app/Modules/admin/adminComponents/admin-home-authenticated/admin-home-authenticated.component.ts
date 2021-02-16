import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-home-authenticated',
  templateUrl: './admin-home-authenticated.component.html',
  styleUrls: ['./admin-home-authenticated.component.scss']
})
export class AdminHomeAuthenticatedComponent implements OnInit {
  currentUrl:string =''
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("admin home",this.router.url)
    this.currentUrl = this.router.url;
   let navStart = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart))as Observable<NavigationStart>;
      navStart.subscribe(evt =>{
        console.log('Navigation Started!',evt.url)
        this.currentUrl = evt.url
      } );
  }

}
