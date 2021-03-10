import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.loadExternalStyles("./sidebar.component.scss").then(
      ()=>console.log("loaded side bar")
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
