import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSideBarOpen:boolean = false;
  constructor() { }

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
