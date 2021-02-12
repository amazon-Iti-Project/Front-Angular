import { Component, OnInit } from '@angular/core';
import { AdminCategoryService } from './admin-category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
  // this provide one service for admin category component and it`s childs
  providers: [AdminCategoryService]
})
export class AdminCategoriesComponent implements OnInit {


  constructor(private ser:AdminCategoryService) { }

  ngOnInit(): void {
    console.log('category parent')
    this.ser.getSharedData().subscribe(res=>console.log("data changed",res))

  }

  
}
