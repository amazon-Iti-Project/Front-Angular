import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';
import { CategoriesJSONService } from '../../services/categories-json.service';
import { ICategoryCollection } from '../../viewModels/ICategoryCollection';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.scss']
})
export class AllDepartmentsComponent implements OnInit {
  title = "Amazon.com: All Departments";
  subscriptionList : Subscription[] = [];
  catList : ICategoryCollection[] = [];
  currentUser : Iuser | undefined = undefined;
  cartItems : Iproduct[] = [];
  totalPrice = 0.0;
  constructor(private catService : CategoriesJSONService,
    private prodService : ProductService,
    private userService : UserService) {
  }
  ngOnInit(): void {
    const sub = this.catService.getAllCategories().subscribe(
      response => { this.catList = response;
        console.log(this.catList);
      },
      error => { console.log(error); }
    );
    this.subscriptionList.push(sub);
    // side menu logic
    // let token = this.userService.isUserSignedIn()
    let token = "aea407a0-7f44-fcd0-c325-b1b3cbbe7711"
    if(token){
      this.userService.getUserByToken(token).subscribe(
        response => {
          this.currentUser = response
          this.currentUser.cart.forEach( id => {
            this.prodService.getProductById(id).subscribe(
              response => {
                this.cartItems.push(response)
                this.totalPrice += response.price
              },
              error => console.log(error)
            )
          });
        },
        error => console.log(error)
      )
    }
  }
}
