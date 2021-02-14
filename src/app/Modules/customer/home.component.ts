import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSideBarOpen:boolean = false;
  
  constructor(private router:Router) { }

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
