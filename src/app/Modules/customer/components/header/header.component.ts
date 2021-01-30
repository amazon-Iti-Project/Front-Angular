import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  // "../../../../node_modules/font-awesome/css/font-awesome.css",
]
})


export class HeaderComponent implements OnInit {
  @Output() allBtnChecked:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    
  }
  sendEventToHome():void{
    console.log("event fired")
    this.allBtnChecked.emit()
  }

}
