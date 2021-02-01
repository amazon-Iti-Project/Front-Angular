import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-statistics',
  templateUrl: './seller-statistics.component.html',
  styleUrls: ['./seller-statistics.component.scss']
})
export class SellerStatisticsComponent implements OnInit {

  constructor() { 
    console.log("seller state")
  }

  ngOnInit(): void {
  }

}
