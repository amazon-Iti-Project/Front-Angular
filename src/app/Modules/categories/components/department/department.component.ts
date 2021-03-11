import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { Iproduct } from 'src/app/viewModel/IProduct';
import { Iuser } from 'src/app/viewModel/Iuser';

interface DepartmentComModel {
  depName?: string;
  productsList?: Iproduct[];
  currentUser?: Iuser | undefined;
  cartItems?: Iproduct[];
  totalPrice?: number;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departmentCompModel: DepartmentComModel = {};

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProductService,
    private userService: UserService) { }
  ngOnInit(): void {
    console.log("on Init department")
    this.departmentCompModel.totalPrice = 0;
    let currUrl = this.router.url;
    console.log(currUrl)
    this.activatedRoute.paramMap.subscribe(param => {
      let paramName = param.get('depName');
      this.departmentCompModel.depName = paramName ? paramName : undefined;
      this.prodService.getProductsByCatName(this.departmentCompModel.depName ? this.departmentCompModel.depName.toLowerCase() : '')
        .subscribe(
          response => {
            this.departmentCompModel.productsList = response;
            console.log("products: ", this.departmentCompModel.productsList);
          },
          error => { console.log(error); }
        )
    });
    // this.productService.getAllProducts().subscribe(
    //   response => this.productsList = response,
    //   error => console.log(error)
    // )
    let token = this.userService.isUserSignedIn()
    if (token) {
      this.userService.getUserByToken(token).subscribe(
        response => {
          console.log("user", response)
          this.departmentCompModel.currentUser = response

          this.prodService.getListOfProductsById(this.departmentCompModel.currentUser?.cart)?.subscribe(
              (carts) => {
                this.departmentCompModel.cartItems = carts
                if (this.departmentCompModel.totalPrice)
                  for (let prod of carts) {
                    this.departmentCompModel.totalPrice += prod.price
                  }
                // this.departmentCompModel.currentUser.cart.forEach(id => {
                //   this.prodService.getProductById(id).subscribe(
                //     response => {
                //       this.departmentCompModel.cartItems?.push(response)
                //       if(this.departmentCompModel.totalPrice)
                //       this.departmentCompModel.totalPrice += response.price
                //     },
                //     error => console.log(error)
                //   )
                // });
              },
              error => console.log(error)
            )
        }
      );
    }
  }
}
