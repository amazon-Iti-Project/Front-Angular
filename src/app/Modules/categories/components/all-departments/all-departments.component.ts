import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesJSONService } from '../../services/categories-json.service';
import { ICategory } from '../../viewModels/ICategory';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.scss']
})
export class AllDepartmentsComponent implements OnInit {
  title = "Amazon.com: All Departments";
  subscriptionList : Subscription[] = [];
  catList : ICategory[] = [];
  constructor(private catService : CategoriesJSONService,
    private router : Router) {
  }
  ngOnInit(): void {
    const sub = this.catService.getAllCategories().subscribe(
      response => { this.catList = response;
        console.log(this.catList);
      },
      error => { console.log(error); }
    );
    this.subscriptionList.push(sub);
  }
}
