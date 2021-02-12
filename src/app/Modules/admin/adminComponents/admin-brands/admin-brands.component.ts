import { Component, OnInit } from '@angular/core';
import { AdminBrandService } from './admin-brand.service';

@Component({
  selector: 'app-admin-brands',
  templateUrl: './admin-brands.component.html',
  styleUrls: ['./admin-brands.component.scss'],
  // this provice one service instance for admin component and it`s childs
  providers: [AdminBrandService],

})
export class AdminBrandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
